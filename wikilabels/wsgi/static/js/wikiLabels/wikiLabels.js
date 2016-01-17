(function($){
	if (window.wikiLabels) {
		throw "wikiLabels is already defined!  Exiting.";
	}
	window.wikiLabels = {
		config: {
			serverRoot: "//ores.wmflabs.org/labels",
			prefix: "wikilabels-",
			messages: {
				en: {
					'date-format': "%Y-%m-%d",
					'Review': 'Review',
					'Workset': 'Workset',
					'Save': 'Save',
					'request workset': 'request workset',
					'connect to server': 'connect to server',
					'Campaigns': 'Campaigns',
					'Workset complete!': 'Workset complete!',
					'Submit label': 'Submit label',
					'Request new workset': 'Request new workset',
					'Diff for revision $1': 'Diff for revision $1',
					'No difference': 'No difference', // between revisions
					'review': 'review', // 'review' a workset
					'open': 'open', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' not completed.  Submit anyway?',
					'fullscreen': 'fullscreen'
				},
				es: {
					'date-format': "%d-%m-%Y",
					'Review': 'Revisar',
					'Workset':'Grupo',
					'Save': 'Guardar',
					'request workset': 'Solicitar grupo de tareas',
					'connect to server': 'Conectar al servidor',
					'Campaigns': 'Campañas',
					'Workset complete!': '¡Grupo de tareas finalizado!',
					'Submit label': 'Entrar etiqueta',
					'Request new workset': 'Solicitar nuevo grupo de tareas',
					'Diff for revision $1': 'Revisar diferencia $1',
					'No difference': 'No hay diferencia', // between revisions
					'review': 'revisar', // 'review' a workset
					'open': 'abrir', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' incompleto.  ¿Entrar de todas formas?',
					'fullscreen': 'Pantalla completa'
				},
				fa: {
					'date-format': "%Y-%m-%d",
					'Review': 'بازبینی',
					'Workset': 'مجموعه کاری',
					'Save': 'ذخیره',
					'request workset': 'درخواست یک مجموعه',
					'connect to server': 'اتصال به سرور',
					'Campaigns': 'کمپین‌ها',
					'Workset complete!': 'مجموعه کامل شد!',
					'Submit label': 'برچسب را بفرست',
					'Request new workset': 'درخواست یک مجموعه جدید',
					'Diff for revision $1': 'تغییرات برای ویرایش $1',
					'No difference': 'بدون تغییر', // between revisions
					'review': 'بازبینی', // 'review' a workset
					'open': 'باز', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' باز است. آیا مطمئنید؟',
					'fullscreen': 'تمام صفحه'
				},
				fr: {
					'date-format': "%d-%m-%Y",
					'Review': 'Relecture',
					'Workset': 'Ensemble de données',
					'Save': 'Sauvegarder',
					'request workset': 'Demander l\'ensemble de données',
					'connect to server': 'Connecter au serveur',
					'Campaigns': 'Campagnes',
					'Workset complete!': 'Ensemble de données terminé !',
					'Submit label': 'Soumettre l\'étiquette',
					'Request new workset': 'Demander un nouvel ensemble de données',
					'Diff for revision $1': 'Différence pour la révision $1',
					'No difference': 'Aucune différence', // between revisions
					'review': 'Relecture', // 'review' a workset
					'open': 'Ouvrir', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' incomplet.  Soumettre quand même ?',
					'fullscreen': 'Plein écran'
				},
				he: {
					'date-format': "%Y-%m-%d",
					'Review': 'סקירה',
					'Workset': 'רשימת טיפול',
					'Save': 'שמירה',
					'request workset': 'בקשת רשימה לטיפול',
					'connect to server': 'התחברות לשרת',
					'Campaigns': 'מבצעים',
					'Workset complete!': 'רשימת הטיפול הושלמה!',
					'Submit label': 'שליחת סיווג',
					'Request new workset': 'בקשת רשימה טיפול חדשה',
					'Diff for revision $1': 'הבדל גרסאות עבור $1',
					'No difference': 'אין הבדל', // between revisions
					'review': 'סקירה', // 'review' a workset
					'open': 'פתיחה', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' לא הושלם.  לשלוח בכל מקרה?',
					'fullscreen': 'מסך מלא'
				},
				id: {
					'date-format': "%d-%m-%Y",
					'Review': 'Tinjau',
					'Workset': 'Pekerjaan',
					'Save': 'Simpan',
					'request workset': 'minta pekerjaan',
					'connect to server': 'sambung ke server',
					'Campaigns': 'Kampanye',
					'Workset complete!': 'Pekerjaan selesai!',
					'Submit label': 'Kirim label',
					'Request new workset': 'Minta pekerjaan baru',
					'Diff for revision $1': 'Beda untuk revisi $1',
					'No difference': 'Tidak ada perbedaan', // between revisions
					'review': 'tinjau', // 'review' a workset
					'open': 'buka', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' belum selesai. Lanjut mengirimkan?',
					'fullscreen': 'layar penuh'
				},
				ja: {
					'date-format': "%Y年%m月%d日",
					'Review': 'レビュー',
					'Workset': '作業単位',
					'Save': '保存',
					'request workset': '作業単位を要請',
					'connect to server': 'サーバーに接続',
					'Campaigns': '作戦',
					'Workset complete!': '作業単位は完了しました！',
					'Submit label': '付箋を送信',
					'Request new workset': '新しい作業単位を要請する',
					'Diff for revision $1': '版$1の差分',
					'No difference': '差分なし', // between revisions
					'review': 'レビュー', // 'review' a workset
					'open': '開く', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\'は完了してません。本当に送信しますか？',
					'fullscreen': '全画面'
				},
				nl: {
					'date-format': "%d-%m-%Y",
					'Review': 'Beoordelen',
					'Workset': 'Werkset',
					'Save': 'Opslaan',
					'request workset': 'werkset opvragen',
					'connect to server': 'verbinden met server',
					'Campaigns': 'Campagnes',
					'Workset complete!': 'Werkset voltooid!',
					'Submit label': 'Label verzenden',
					'Request new workset': 'Nieuwe werkset opvragen',
					'Diff for revision $1': 'Verschil voor bewerking $1',
					'No difference': 'Geen verschil', // between revisions
					'review': 'beoordelen', // 'review' a workset
					'open': 'openen', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' niet voltooid.  Toch verzenden?',
					'fullscreen': 'fullscreen'
				},
				pt: {
					'date-format': "%d-%m-%Y",
					'Review': 'Revisar',
					'Workset': 'Grupo',
					'Save': 'Salvar',
					'request workset': 'solicitar um grupo de tarefas',
					'connect to server': 'conectar ao servidor',
					'Campaigns': 'Campanhas',
					'Workset complete!': 'Conjunto de trabalho concluí­do!',
					'Submit label': 'Submeter o rótulo',
					'Request new workset': 'Solicitar um novo grupo de tarefas',
					'Diff for revision $1': 'Diferenças para a revisão $1',
					'No difference': 'Nenhuma diferença', // between revisions
					'review': 'revisar', // 'review' a workset
					'open': 'abrir', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' não foi concluído. Submeter mesmo assim?',
					'fullscreen': 'tela cheia'
				},
				ru: {
					'date-format': "%d-%m-%Y",
					'Review': 'Проверка',
					'Workset': 'Рабочий набор',
					'Save': 'Сохранить',
					'request workset': 'Запросить рабочий набор',
					'connect to server': 'Установить соединение с сервером',
					'Campaigns': 'Кампании',
					'Workset complete!': 'Рабочий набор готов!',
					'Submit label': 'Отправить пометку',
					'Request new workset': 'Запросить новый рабочий набор',
					'Diff for revision $1': 'Diff для ревизии $1',
					'No difference': 'Различий нет', // between revisions
					'review': 'проверка', // 'review' a workset
					'open': 'открыть', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' не готово.  Отправить всё равно?',
					'fullscreen': 'полный экран'
				},
				tr: {
					'date-format': "%Y-%m-%d",
					'Review': 'İncele',
					'Workset': 'İş kümesi',
					'Save': 'Kaydet',
					'request workset': 'iş kümesi iste',
					'connect to server': 'sunucuya bağlan',
					'Campaigns': 'Girişimler',
					'Workset complete!': 'İş kümesi tamamlandı!',
					'Submit label': 'Etiketi sun',
					'Request new workset': 'Yeni iş kümesi iste',
					'Diff for revision $1': '$1 değisikliği için diff',
					'No difference': 'Fark yoktur', // between revisions
					'review': 'incele', // 'review' a workset
					'open': 'açık', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' tamamlanmadı. Genede sunulsun mu?',
					'fullscreen': 'tam ekran'
				},
				uk: {
					'date-format': "%Y-%m-%d",
					'Review': 'Перевірка',
					'Workset': 'Робочий набір',
					'Save': 'Зберегти',
					'request workset': 'запитати робочий набір',
					'connect to server': 'під\'єднатись до сервера',
					'Campaigns': 'Кампанії',
					'Workset complete!': 'Робочий набір готовий!',
					'Submit label': 'Надіслати мітку',
					'Request new workset': 'Запитати новий робочий набір',
					'Diff for revision $1': 'Різниця для версії $1',
					'No difference': 'Немає різниці', // between revisions
					'review': 'перевірити', // 'review' a workset
					'open': 'відкрити', // 'open' a workset
					'\'$1\' not completed.  Submit anyway?': '\'$1\' не готовий.  Усе одно надіслати?',
					'fullscreen': 'повний екран'
				}
				vi: {
					'date-format': "%Y-%m-%d",
					'Review': 'Kiểm tra lại',
					'Workset': 'Gói công việc',
					'Save': 'Lưu lại',
					'request workset': 'yêu cầu gói công việc',
					'connect to server': 'kết nối tới máy chủ',
					'Campaigns': 'Chiến dịch',
					'Workset complete!': 'Gói công việc đã hoàn tất!',
					'Submit label': 'Gửi nhãn',
					'Request new workset': 'Yêu cầu gói công việc mới',
					'Diff for revision $1': 'Khác biệt của phiên bản $1',
					'No difference': 'Không có sự khác biệt',
					'review': 'kiểm tra lại',
					'open': 'mở',
					'\'$1\' not completed. Submit anyway?': '\'$1\' chưa hoàn tất. Bạn vẫn muốn gửi đi?',
					'fullscreen': 'toàn màn hình',
				},
				de: {
					'date-format': "%Y-%m-%d",
					'Review': 'Beurteilung',
					'Workset': 'Arbeitspaket',
					'Save': 'Speichern',
					'request workset': 'Arbeitspaket anfordern',
					'connect to server': 'Mit Server verbinden',
					'Campaigns': 'Kampagne',
					'Workset complete!': 'Arbeitspaket vollständig!',
					'Submit label': 'Markierung speichern',
					'Request new workset': 'Neues Arbeitspaket anfordern',
					'Diff for revision $1': 'Unterschied zu Bearbeitung $1',
					'No difference': 'Kein Unterschied',
					'review': 'Beurteilung',
					'open': 'offen',
					'\'$1\' not completed. Submit anyway?': '\'$1\' nicht vollständig. Trotzdem absenden?',
					'fullscreen': 'Vollbild',
				},
				zh-hant: {
					'date-format': "%Y-%m-%d",
					'Review': '檢閱',
					'Workset': '工作集',
					'Save': '儲存',
					'request workset': '要求工作集',
					'connect to server': '連線至伺服器',
					'Campaigns': 'Campaigns',
					'Workset complete!': '工作集已完成！',
					'Submit label': '送出標籤',
					'Request new workset': '要求新工作集',
					'Diff for revision $1': '版本$1的差異',
					'No difference': '无差異',
					'review': '檢閱',
					'open': '開啟',
					'\'$1\' not completed. Submit anyway?': '\'$1\' 未完成。確定送出？',
					'fullscreen': '全螢幕',
				},
				zh-hans: {
					'date-format': "%Y-%m-%d",
					'Review': '复核',
					'Workset': '工作集',
					'Save': '保存',
					'request workset': '请求工作集',
					'connect to server': '连接至服务器',
					'Campaigns': '作战',
					'Workset complete!': '工作集已完成！',
					'Submit label': '提交标签',
					'Request new workset': '请求新工作集',
					'Diff for revision $1': '版本$1的差异',
					'No difference': '无差异',
					'review': '复核',
					'open': '开启',
					'\'$1\' not completed. Submit anyway?': '\'$1\' 未完成。确认提交？',
					'fullscreen': '全屏',
				},
				it: {
					'date-format': "%d-%m-%Y",
					'Review': 'Valuta',
					'Workset': 'Workset',
					'Save': 'Salva',
					'request workset': 'richiesta workset',
					'connect to server': 'connessione al server',
					'Campaigns': 'Campagne',
					'Workset complete!': 'Workset completo!',
					'Submit label': 'Invia etichetta',
					'Request new workset': 'Richiedi nuovo workset',
					'Diff for revision $1': 'Differenze per la versione $1',
					'No difference': 'Nessuna differenza',
					'review': 'valuta',
					'open': 'aperto',
					'\'$1\' not completed. Submit anyway?': '\'$1\' non completo. Inviare comunque?',
					'fullscreen': 'schermo intero',
				},
				et: {
					'date-format': "%Y-%m-%d",
					'Review': 'Kontrollimine',
					'Workset': 'Töökomplekt',
					'Save': 'Salvesta',
					'request workset': 'telli töökomplekt',
					'connect to server': 'loo ühendus serveriga',
					'Campaigns': 'Kampaaniad',
					'Workset complete!': 'Töökomplekt lõpetatud!',
					'Submit label': 'Esita märgend',
					'Request new workset': 'Telli uus töökomplekt',
					'Diff for revision $1': 'Erinevused redaktsioonis $1',
					'No difference': 'Erinevus puudub',
					'review': 'kontrolli',
					'open': 'ava',
					'\'$1\' not completed. Submit anyway?': '\'$1\' pole lõpetatud. Saada sellest hoolimata?',
					'fullscreen': 'täisaken',
				},
				ur: {
					'date-format': "%Y-%m-%d",
					'Review': 'نظر ثانی',
					'Workset': 'مجموعہ کار',
					'Save': 'محفوظ کریں',
					'request workset': 'درخواست مجموعہ کار',
					'connect to server': 'سرور سے مربوط کریں',
					'Campaigns': 'مہمات',
					'Workset complete!': 'مجموعہ کار مکمل!',
					'Submit label': 'لیبل روانہ کریں',
					'Request new workset': 'درخواست جدید مجموعہ کار',
					'Diff for revision $1': 'تبدیلیاں برائے اعادہ $1',
					'No difference': 'کوئی تبدیلی نہیں',
					'review': 'نظر ثانی',
					'open': 'کھولیں',
					'\'$1\' not completed. Submit anyway?': '\'$1\' نامکمل۔ واقعی روانہ کریں؟',
					'fullscreen': 'مکمل سکرین',
				},
				khw: {
					'date-format': "%Y-%m-%d",
					'Review': 'نظر ثانی',
					'Workset': 'مجموعہ کار',
					'Save': 'محفوظ کورے',
					'request workset': 'درخواست مجموعہ کار',
					'connect to server': 'سرورو سم کنیکٹ کورے',
					'Campaigns': 'مہمات',
					'Workset complete!': 'مجموعہ کار مکمل!',
					'Submit label': 'لیبل روانہ کورے',
					'Request new workset': 'درخواست جدید مجموعہ کار',
					'Diff for revision $1': 'تبدیلیاں برائے اعادہ $1',
					'No difference': 'کیہ تبدیلی نیکی',
					'review': 'نظر ثانی',
					'open': 'کھولاو کورے',
					'\'$1\' not completed. Submit anyway?': '\'$1\' نامکمل۔ واقعی روانہ کورے؟',
					'fullscreen': 'مکمل سکرین',
				}
			}
		}
	};
})(jQuery);
