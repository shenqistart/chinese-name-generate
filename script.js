/**
 * 外国人中文名生成器 - 前端交互脚本
 * 实现表单提交、API调用和结果展示功能
 * 支持多语言界面
 */

// 导入语言模块
import { getText, setLanguage, updatePageTexts, currentLanguage } from './languages.js';

// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const nameForm = document.getElementById('name-form');
    const englishNameInput = document.getElementById('english-name');
    const generateBtn = document.getElementById('generate-btn');
    const loadingElement = document.getElementById('loading');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');
    const languageSelect = document.getElementById('language-select');
    const languageLabel = document.getElementById('language-label');

    // 初始隐藏结果区域
    resultsSection.style.display = 'none';
    
    // 初始化页面文本
    updatePageTexts();
    
    // 语言选择事件处理
    languageSelect.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // 表单提交事件处理
    nameForm.addEventListener('submit', async (event) => {
        // 阻止表单默认提交行为
        event.preventDefault();
        
        // 获取用户输入的英文名
        const englishName = englishNameInput.value.trim();
        
        // 验证输入
        if (!englishName) {
            alert(getText('input_required'));
            return;
        }
        
        // 显示加载动画，隐藏结果区域
        loadingElement.style.display = 'block';
        resultsSection.style.display = 'none';
        generateBtn.disabled = true;
        
        try {
            // 调用后端API生成中文名
            const chineseNames = await generateChineseNames(englishName);
            
            // 显示生成的结果
            displayResults(chineseNames);
        } catch (error) {
            // 处理错误
            console.error('生成名字时出错:', error);
            alert(`${getText('server_error')}: ${error.message || getText('connection_error')}`);
        } finally {
            // 隐藏加载动画，启用按钮
            loadingElement.style.display = 'none';
            generateBtn.disabled = false;
        }
    });

    /**
     * 调用后端API生成中文名
     * @param {string} englishName - 用户输入的英文名
     * @returns {Promise<Object>} - 包含生成的中文名的对象
     */
    async function generateChineseNames(englishName) {
        // 确定API基础路径
        const apiBasePath = window.location.hostname === 'localhost' ? '' : '/api';
        
        const response = await fetch(`${apiBasePath}/generate-name`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                englishName,
                language: currentLanguage // 传递当前选择的语言
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || '服务器错误');
        }

        return await response.json();
    }

    /**
     * 在页面上显示生成的中文名结果
     * @param {Object} data - 包含生成的中文名的对象
     */
    function displayResults(data) {
        // 清空之前的结果
        resultsContainer.innerHTML = '';
        
        // 检查是否有原始响应（API返回格式不正确的情况）
        if (data.rawResponse) {
            const resultElement = document.createElement('div');
            resultElement.className = 'name-result';
            resultElement.innerHTML = `<p>${getText('api_format_error')}</p><pre>${data.rawResponse}</pre>`;
            resultsContainer.appendChild(resultElement);
            resultsSection.style.display = 'block';
            return;
        }
        
        // 检查是否有名字数组
        if (!data.names || !Array.isArray(data.names) || data.names.length === 0) {
            const resultElement = document.createElement('div');
            resultElement.className = 'name-result';
            resultElement.innerHTML = `<p>${getText('no_results')}</p>`;
            resultsContainer.appendChild(resultElement);
            resultsSection.style.display = 'block';
            return;
        }
        
        // 遍历并显示每个生成的中文名
        data.names.forEach((nameData, index) => {
            const resultElement = document.createElement('div');
            resultElement.className = 'name-result';
            
            resultElement.innerHTML = `
                <div class="name-header">
                    <span class="name-number">${getText('name_number')} ${index + 1}</span>
                    <h3 class="chinese-name">${nameData.chinese_name || '未知'}</h3>
                </div>
                <div class="name-meanings">
                    <div class="meaning-section">
                        <h4>${getText('meaning_cn_title')}</h4>
                        <p>${nameData[`meaning_cn_${currentLanguage}`] || nameData.meaning_en || 'No meaning provided'}</p>
                    </div>
                </div>
            `;
            
            resultsContainer.appendChild(resultElement);
        });
        
        // 显示结果区域
        resultsSection.style.display = 'block';
        
        // 平滑滚动到结果区域
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});