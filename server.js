const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
// 加载环境变量配置
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 启用CORS
app.use(cors());

// 解析JSON请求体
app.use(express.json());

// 确定当前环境
const isProduction = process.env.NODE_ENV === 'production';

// API基础路径，在生产环境中可能需要调整
const API_BASE_PATH = isProduction ? '/api' : '';

// 提供静态文件
app.use(express.static(path.join(__dirname)));

// 添加详细日志记录
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// API密钥
const API_KEY = 'c3730dc2-d31a-4f41-91aa-7193629920e9';

// 处理生成中文名的请求
app.post(`${API_BASE_PATH}/generate-name`, async (req, res) => {
  try {
    const { englishName, language = 'zh' } = req.body;
    console.log(`Processing request for ${englishName} in language: ${language}`);
    
    if (!englishName) {
      // 根据请求的语言返回错误信息
      const errorMessages = {
        'zh': '请提供英文名',
        'en': 'Please provide an English name',
        'es': 'Por favor proporcione un nombre en inglés',
        'fr': 'Veuillez fournir un nom anglais',
        'de': 'Bitte geben Sie einen englischen Namen an',
        'ja': '英語名を提供してください',
        'ru': 'Пожалуйста, укажите английское имя',
        'ar': 'يرجى تقديم اسم إنجليزي'
      };
      return res.status(400).json({ error: errorMessages[language] || errorMessages['en'] });
    }
    
    // 构建发送给DeepSeek R1 API的提示词，使用统一的提示词结构
    // 无论用户选择哪种语言，都使用相同的提示词结构，只是根据语言返回相应的解释
    const systemPrompt = `你是一个专业的中文名字生成专家，擅长为外国人创造有趣且富有文化内涵的中文名。
请根据用户提供的英文名，生成三个独特的中文名，每个名字都应该：
1. 考虑英文名的发音和含义
2. 融入中国传统文化元素
3. 适当加入幽默或有趣的成分
4. 每个名字提供详细的中文寓意解释

请按照以下JSON格式返回结果（不要有任何其他文字）：
{
  "names": [
    {
      "chinese_name": "中文名1",
      "meaning_cn_${language}": "用${language}语言解释中文名的寓意"
    },
    {
      "chinese_name": "中文名2",
      "meaning_cn_${language}": "用${language}语言解释中文名的寓意"
    },
    {
      "chinese_name": "中文名3",
      "meaning_cn_${language}": "用${language}语言解释中文名的寓意"
    }
  ]
}`;

    // 调用DeepSeek R1 API
    // 使用统一的用户提示词，只传递英文名和语言参数
    const userPrompt = `我的名字是 ${englishName}，请给我生成三个有趣的中文名，并用${language}语言解释每个名字的寓意。`
    
    const response = await axios.post(
      'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
      {
        model: 'deepseek-r1-250120',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        timeout: 60000 // 60秒超时设置
      }
    );

    // 解析API响应
    const aiResponse = response.data.choices[0].message.content;
    
    // 尝试解析JSON响应
    let parsedResponse;
    try {
      // 提取JSON部分（以防AI返回了额外的文本）
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? jsonMatch[0] : aiResponse;
      parsedResponse = JSON.parse(jsonStr);
    } catch (error) {
      console.error('解析AI响应失败:', error);
      // 如果解析失败，返回原始响应
      return res.status(200).json({ rawResponse: aiResponse });
    }

    return res.json(parsedResponse);
  } catch (error) {
    console.error('API调用错误:', error.message);
    // 根据请求的语言返回错误信息
    const errorMessages = {
      'zh': '生成名字时出错',
      'en': 'Error generating names',
      'es': 'Error al generar nombres',
      'fr': 'Erreur lors de la génération des noms',
      'de': 'Fehler beim Generieren von Namen',
      'ja': '名前の生成中にエラーが発生しました',
      'ru': 'Ошибка при генерации имен',
      'ar': 'خطأ في توليد الأسماء'
    };
    return res.status(500).json({ 
      error: errorMessages[language] || errorMessages['en'], 
      details: error.message 
    });
  }
});

// 主页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});