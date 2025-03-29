/**
 * 多语言配置文件
 * 支持8种常用语言：中文、英语、西班牙语、法语、德语、日语、俄语和阿拉伯语
 */

const languages = {
    // 中文 (Chinese)
    'zh': {
        // 页面标题和描述
        'title': '外国人中文名生成器',
        'subtitle': '输入您的英文名，获取独特的中文名及其文化寓意',
        'footer': '© 2023 外国人中文名生成器 | 基于DeepSeek R1 AI技术',
        
        // 表单元素
        'form_label': '您的英文名',
        'form_placeholder': '例如：John, Emma, Michael...',
        'generate_btn': '生成中文名',
        
        // 结果区域
        'loading_text': '正在生成您的中文名...',
        'results_title': '为您生成的中文名',
        'name_number': '名字',
        'meaning_cn_title': '中文寓意',
        'meaning_en_title': '英文寓意',
        
        // 错误信息
        'input_required': '请输入您的英文名',
        'server_error': '生成名字时出错',
        'connection_error': '服务器连接失败',
        'no_results': '未能生成中文名，请稍后再试。',
        'api_format_error': 'API返回了非标准格式的响应。原始响应：',
        
        // 语言选择器
        'language_selector': '选择语言'
    },
    
    // 英语 (English)
    'en': {
        // Page title and description
        'title': 'Chinese Name Generator for Foreigners',
        'subtitle': 'Enter your English name to get unique Chinese names with cultural meanings',
        'footer': '© 2023 Chinese Name Generator | Powered by DeepSeek R1 AI',
        
        // Form elements
        'form_label': 'Your English Name',
        'form_placeholder': 'e.g., John, Emma, Michael...',
        'generate_btn': 'Generate Chinese Names',
        
        // Results area
        'loading_text': 'Generating your Chinese names...',
        'results_title': 'Chinese Names Generated for You',
        'name_number': 'Name',
        'meaning_cn_title': 'Chinese Meaning',
        'meaning_en_title': 'English Meaning',
        
        // Error messages
        'input_required': 'Please enter your English name',
        'server_error': 'Error generating names',
        'connection_error': 'Server connection failed',
        'no_results': 'Failed to generate Chinese names. Please try again later.',
        'api_format_error': 'API returned a non-standard format response. Raw response:',
        
        // Language selector
        'language_selector': 'Select Language'
    },
    
    // 西班牙语 (Spanish)
    'es': {
        // Título y descripción de la página
        'title': 'Generador de Nombres Chinos para Extranjeros',
        'subtitle': 'Ingrese su nombre en inglés para obtener nombres chinos únicos con significados culturales',
        'footer': '© 2023 Generador de Nombres Chinos | Desarrollado con DeepSeek R1 AI',
        
        // Elementos del formulario
        'form_label': 'Su Nombre en Inglés',
        'form_placeholder': 'ej., John, Emma, Michael...',
        'generate_btn': 'Generar Nombres Chinos',
        
        // Área de resultados
        'loading_text': 'Generando sus nombres chinos...',
        'results_title': 'Nombres Chinos Generados para Usted',
        'name_number': 'Nombre',
        'meaning_cn_title': 'Significado en Chino',
        'meaning_en_title': 'Significado en Inglés',
        
        // Mensajes de error
        'input_required': 'Por favor ingrese su nombre en inglés',
        'server_error': 'Error al generar nombres',
        'connection_error': 'Falló la conexión con el servidor',
        'no_results': 'No se pudieron generar nombres chinos. Por favor intente más tarde.',
        'api_format_error': 'La API devolvió una respuesta con formato no estándar. Respuesta sin procesar:',
        
        // Selector de idioma
        'language_selector': 'Seleccionar Idioma'
    },
    
    // 法语 (French)
    'fr': {
        // Titre et description de la page
        'title': 'Générateur de Noms Chinois pour Étrangers',
        'subtitle': 'Entrez votre nom anglais pour obtenir des noms chinois uniques avec des significations culturelles',
        'footer': '© 2023 Générateur de Noms Chinois | Propulsé par DeepSeek R1 AI',
        
        // Éléments du formulaire
        'form_label': 'Votre Nom Anglais',
        'form_placeholder': 'ex., John, Emma, Michael...',
        'generate_btn': 'Générer des Noms Chinois',
        
        // Zone de résultats
        'loading_text': 'Génération de vos noms chinois...',
        'results_title': 'Noms Chinois Générés pour Vous',
        'name_number': 'Nom',
        'meaning_cn_title': 'Signification en Chinois',
        'meaning_en_title': 'Signification en Anglais',
        
        // Messages d'erreur
        'input_required': 'Veuillez entrer votre nom anglais',
        'server_error': 'Erreur lors de la génération des noms',
        'connection_error': 'Échec de la connexion au serveur',
        'no_results': 'Impossible de générer des noms chinois. Veuillez réessayer plus tard.',
        'api_format_error': 'L\'API a renvoyé une réponse au format non standard. Réponse brute:',
        
        // Sélecteur de langue
        'language_selector': 'Sélectionner la Langue'
    },
    
    // 德语 (German)
    'de': {
        // Seitentitel und Beschreibung
        'title': 'Chinesischer Namensgenerator für Ausländer',
        'subtitle': 'Geben Sie Ihren englischen Namen ein, um einzigartige chinesische Namen mit kultureller Bedeutung zu erhalten',
        'footer': '© 2023 Chinesischer Namensgenerator | Unterstützt von DeepSeek R1 AI',
        
        // Formularelemente
        'form_label': 'Ihr Englischer Name',
        'form_placeholder': 'z.B., John, Emma, Michael...',
        'generate_btn': 'Chinesische Namen Generieren',
        
        // Ergebnisbereich
        'loading_text': 'Generiere Ihre chinesischen Namen...',
        'results_title': 'Für Sie generierte chinesische Namen',
        'name_number': 'Name',
        'meaning_cn_title': 'Chinesische Bedeutung',
        'meaning_en_title': 'Englische Bedeutung',
        
        // Fehlermeldungen
        'input_required': 'Bitte geben Sie Ihren englischen Namen ein',
        'server_error': 'Fehler beim Generieren von Namen',
        'connection_error': 'Serververbindung fehlgeschlagen',
        'no_results': 'Chinesische Namen konnten nicht generiert werden. Bitte versuchen Sie es später erneut.',
        'api_format_error': 'API hat eine Antwort in einem nicht standardmäßigen Format zurückgegeben. Rohantwort:',
        
        // Sprachauswahl
        'language_selector': 'Sprache Auswählen'
    },
    
    // 日语 (Japanese)
    'ja': {
        // ページタイトルと説明
        'title': '外国人向け中国語名前ジェネレーター',
        'subtitle': '英語の名前を入力して、文化的な意味を持つユニークな中国語の名前を取得する',
        'footer': '© 2023 中国語名前ジェネレーター | DeepSeek R1 AI技術搭載',
        
        // フォーム要素
        'form_label': 'あなたの英語名',
        'form_placeholder': '例：John, Emma, Michael...',
        'generate_btn': '中国語名を生成する',
        
        // 結果エリア
        'loading_text': 'あなたの中国語名を生成中...',
        'results_title': 'あなたのために生成された中国語名',
        'name_number': '名前',
        'meaning_cn_title': '中国語の意味',
        'meaning_en_title': '英語の意味',
        
        // エラーメッセージ
        'input_required': '英語名を入力してください',
        'server_error': '名前の生成中にエラーが発生しました',
        'connection_error': 'サーバー接続に失敗しました',
        'no_results': '中国語名を生成できませんでした。後でもう一度お試しください。',
        'api_format_error': 'APIが非標準形式のレスポンスを返しました。生のレスポンス：',
        
        // 言語セレクター
        'language_selector': '言語を選択'
    },
    
    // 俄语 (Russian)
    'ru': {
        // Заголовок и описание страницы
        'title': 'Генератор Китайских Имен для Иностранцев',
        'subtitle': 'Введите свое английское имя, чтобы получить уникальные китайские имена с культурным значением',
        'footer': '© 2023 Генератор Китайских Имен | Работает на технологии DeepSeek R1 AI',
        
        // Элементы формы
        'form_label': 'Ваше Английское Имя',
        'form_placeholder': 'напр., John, Emma, Michael...',
        'generate_btn': 'Сгенерировать Китайские Имена',
        
        // Область результатов
        'loading_text': 'Генерация ваших китайских имен...',
        'results_title': 'Китайские Имена, Сгенерированные для Вас',
        'name_number': 'Имя',
        'meaning_cn_title': 'Значение на Китайском',
        'meaning_en_title': 'Значение на Английском',
        
        // Сообщения об ошибках
        'input_required': 'Пожалуйста, введите ваше английское имя',
        'server_error': 'Ошибка при генерации имен',
        'connection_error': 'Ошибка подключения к серверу',
        'no_results': 'Не удалось сгенерировать китайские имена. Пожалуйста, попробуйте позже.',
        'api_format_error': 'API вернул ответ в нестандартном формате. Исходный ответ:',
        
        // Выбор языка
        'language_selector': 'Выбрать Язык'
    },
    
    // 阿拉伯语 (Arabic)
    'ar': {
        // عنوان الصفحة والوصف
        'title': 'مولد الأسماء الصينية للأجانب',
        'subtitle': 'أدخل اسمك الإنجليزي للحصول على أسماء صينية فريدة ذات معاني ثقافية',
        'footer': '© 2023 مولد الأسماء الصينية | مدعوم بتقنية DeepSeek R1 AI',
        
        // عناصر النموذج
        'form_label': 'اسمك الإنجليزي',
        'form_placeholder': 'مثال: John, Emma, Michael...',
        'generate_btn': 'توليد الأسماء الصينية',
        
        // منطقة النتائج
        'loading_text': 'جاري توليد أسمائك الصينية...',
        'results_title': 'الأسماء الصينية المولدة لك',
        'name_number': 'الاسم',
        'meaning_cn_title': 'المعنى بالصينية',
        'meaning_en_title': 'المعنى بالإنجليزية',
        
        // رسائل الخطأ
        'input_required': 'الرجاء إدخال اسمك الإنجليزي',
        'server_error': 'خطأ في توليد الأسماء',
        'connection_error': 'فشل الاتصال بالخادم',
        'no_results': 'فشل في توليد الأسماء الصينية. يرجى المحاولة مرة أخرى لاحقًا.',
        'api_format_error': 'أعادت واجهة برمجة التطبيقات استجابة بتنسيق غير قياسي. الاستجابة الأصلية:',
        
        // محدد اللغة
        'language_selector': 'اختر اللغة'
    }
};

// 默认语言
let currentLanguage = 'zh';

/**
 * 获取当前语言的翻译文本
 * @param {string} key - 翻译键名
 * @returns {string} - 翻译文本
 */
function getText(key) {
    // 如果当前语言中存在该键，则返回对应的值，否则返回中文（默认语言）的值，如果都不存在则返回键名
    return (languages[currentLanguage] && languages[currentLanguage][key]) || 
           (languages['zh'] && languages['zh'][key]) || 
           key;
}

/**
 * 切换当前语言
 * @param {string} lang - 语言代码
 */
function setLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        updatePageTexts();
    }
}

/**
 * 更新页面上的所有文本
 */
function updatePageTexts() {
    // 更新页面标题和描述
    document.title = getText('title');
    document.querySelector('h1').textContent = getText('title');
    document.querySelector('.subtitle').textContent = getText('subtitle');
    document.querySelector('footer p').textContent = getText('footer');
    
    // 更新表单元素
    document.querySelector('label[for="english-name"]').textContent = getText('form_label');
    document.getElementById('english-name').placeholder = getText('form_placeholder');
    document.getElementById('generate-btn').textContent = getText('generate_btn');
    
    // 更新加载文本
    document.querySelector('#loading p').textContent = getText('loading_text');
    
    // 更新结果区域标题
    if (document.querySelector('#results-section h2')) {
        document.querySelector('#results-section h2').textContent = getText('results_title');
    }
    
    // 更新已显示的结果（如果有）
    updateDisplayedResults();
}

/**
 * 更新已显示的结果文本
 */
function updateDisplayedResults() {
    const nameResults = document.querySelectorAll('.name-result');
    if (nameResults.length > 0) {
        nameResults.forEach((result, index) => {
            // 更新名字编号
            const nameNumber = result.querySelector('.name-number');
            if (nameNumber) {
                nameNumber.textContent = `${getText('name_number')} ${index + 1}`;
            }
            
            // 更新寓意标题
            const meaningTitles = result.querySelectorAll('.meaning-section h4');
            if (meaningTitles.length >= 2) {
                meaningTitles[0].textContent = getText('meaning_cn_title');
                meaningTitles[1].textContent = getText('meaning_en_title');
            }
        });
    }
}

// 导出语言相关函数和数据
export { languages, currentLanguage, getText, setLanguage, updatePageTexts };