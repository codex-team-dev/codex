(function () {
  var N = function (b, l) { return '<div class="gx-nav"><b>' + b + '</b>' + l.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div>'; };
  var H = function (t, p) { return '<h3>' + t + '</h3>' + (p ? '<p>' + p + '</p>' : ''); };
  var B = function (t) { return '<span class="gx-btn">' + t + '</span>'; };
  var P = function (a, on) { return '<div class="gx-row">' + a.map(function (x, i) { return '<span class="gx-pill' + (i === on ? ' on' : '') + '">' + x + '</span>'; }).join('') + '</div>'; };
  var T = function (a) { return '<div class="gx-row">' + a.map(function (x) { return '<div class="gx-tile"><div class="gx-img"></div>' + x[0] + '<br><b>' + x[1] + '</b></div>'; }).join('') + '</div>'; };
  var M = function (a) { return '<div class="gx-meter">' + a.map(function (x) { return '<span>' + x[0] + '</span><u style="--w:' + x[1] + '%"></u>'; }).join('') + '</div>'; };
  var R = function (a) { return '<div class="gx-list">' + a.map(function (x) { return '<div><span>' + x[0] + '</span><b>' + x[1] + '</b></div>'; }).join('') + '</div>'; };
  var ONE = function (t, l, pr) { return '<div class="gx-tile"><div class="gx-img gx-dark"></div><b>' + t + '</b><br>' + l + '<br><b>' + pr + '</b></div>'; };

  var S = [
    { id: 'clinic', cat: 'services', t: 'نظام حجز عيادات', s: 'هادئ ومريح للعين', d: 'موقع عربي يدير الأطباء والمواعيد والمرضى بواجهة هادئة.', p: ['الرئيسية', 'الأطباء والتخصصات', 'حجز موعد', 'مواعيدي', 'لوحة إدارة العيادة'],
      m: N('عيادة الندى', ['الأطباء', 'مواعيدي']) + H('احجز موعدك مع الطبيب المناسب', 'اختر التخصص والوقت، وسيصلك تأكيد فوري.') + P(['9:00', '9:30', '10:00', '11:30'], 1) + B('احجز الآن') },
    { id: 'gym', cat: 'services', t: 'نادٍ رياضي', s: 'داكن وحاد', d: 'حسابات للمدير واللاعب، اشتراكات بمدة محددة، وتمارين يضيفها المدرب لكل مجموعة عضلية.', p: ['الرئيسية', 'التمارين حسب العضلة', 'البرامج الغذائية', 'الاشتراكات', 'لوحة المدرب'],
      m: N('حديد', ['التمارين', 'التغذية']) + H('تمرين مرتب لكل عضلة') + M([['صدر', 80], ['ظهر', 60], ['أرجل', 45]]) + B('ابدأ برنامجك') },
    { id: 'estate', cat: 'services', t: 'شركة عقارية', s: 'أخضر عميق وذهبي', d: 'عرض العقارات مع بحث واستفسارات ولوحة إدارة.', p: ['الرئيسية', 'قائمة العقارات', 'تفاصيل عقار', 'نموذج استفسار', 'لوحة الإدارة'],
      m: N('مفتاح', ['للبيع', 'للإيجار']) + H('بيتك القادم بانتظارك') + ONE('شقة بثلاث غرف', 'المزة، دمشق', '<span class="gx-ac">85,000 $</span>') + B('أرسل استفسارًا') },
    { id: 'store', cat: 'commerce', t: 'متجر إلكتروني', s: 'بنفسجي مرح', d: 'متجر بكل ميزات التجارة الأساسية: منتجات وسلة وطلبات.', p: ['المنتجات', 'التصفية والبحث', 'السلة', 'إتمام الطلب', 'إدارة الطلبات'],
      m: N('سوقنا', ['الأقسام', 'السلة (2)']) + H('تسوّق كل ما تحتاجه') + T([['سماعات', '45 $'], ['ساعة', '80 $'], ['حقيبة', '60 $']]) },
    { id: 'codex', cat: 'tech', t: 'فريق برمجي', s: 'أزرق داكن وتقني', d: 'موقع تعريفي لفريق تطوير ويب وتطبيقات.', p: ['الرئيسية', 'معرض الأعمال', 'آراء العملاء', 'صفحة الاستشارة', 'التواصل'],
      m: N('Codex', ['أعمالنا', 'استشارة']) + H('نبني مواقع وتطبيقات تعمل') + '<div class="gx-code">const app = <em>build</em>({<br>&nbsp;&nbsp;web: true, mobile: true<br>});</div>' + B('احجز استشارة') },
    { id: 'course', cat: 'tech', t: 'منصة دورات', s: 'بنفسجي هادئ للقراءة', d: 'صفحة درس بفيديو وتبويبات للملاحظات والأسئلة والملفات.', p: ['قائمة الدورات', 'صفحة الدرس', 'الملاحظات', 'تقدّمي'],
      m: N('Studyou', ['الدورات', 'دروسي']) + H('تعلّم خطوة بخطوة') + '<div class="gx-video">▶</div>' + P(['ملاحظات', 'أسئلة', 'ملفات'], 0) },

    { id: 'rates', cat: 'services', sy: 1, t: 'أسعار الصرف والذهب', s: 'صفحة واحدة موثوقة', d: 'أسعار الدولار واليورو والذهب محدّثة، مع محوّل عملات وتنبيهات.', n: 'الأسعار تتغير خلال اليوم، والناس تسأل عنها في كل مكان. صفحة سريعة وواضحة توفر عليهم ذلك.', p: ['الأسعار الحالية', 'الذهب بالغرام', 'محوّل العملات', 'رسم بياني', 'تنبيهات السعر'],
      m: N('سعر اليوم', ['الصرف', 'الذهب']) + H('أسعار الصرف والذهب أولًا بأول') + R([['دولار أمريكي', '00,000 ل.س'], ['يورو', '00,000 ل.س'], ['ذهب عيار 21', '00,000 ل.س']]) + B('نبّهني عند التغيّر') },
    { id: 'solar', cat: 'services', sy: 1, t: 'طاقة شمسية وحاسبة الأمبيرات', s: 'أصفر واضح', d: 'شركة طاقة شمسية مع حاسبة تحدد الألواح والبطاريات المناسبة للبيت.', n: 'انقطاع الكهرباء الطويل يدفع الأسر لشراء ألواح وبطاريات دون معرفة ما يناسبها فعلًا.', p: ['حاسبة الأحمال', 'الألواح والبطاريات', 'طلب عرض سعر', 'معرض التركيبات', 'الضمان والصيانة'],
      m: N('نور', ['المنتجات', 'الحاسبة']) + H('كم أمبير يحتاج بيتك؟') + P(['براد', 'غسالة', 'إضاءة', 'تلفاز'], 0) + '<div class="gx-res">تحتاج 10 أمبير تقريبًا</div>' + B('اطلب عرض سعر') },
    { id: 'food', cat: 'commerce', sy: 1, t: 'توصيل طعام ومطاعم', s: 'أبيض وأحمر شهي', d: 'قائمة مطاعم وسلة وتتبع طلب، مع لوحة يديرها صاحب المطعم.', n: 'المطاعم الصغيرة تستلم الطلبات بالهاتف والرسائل، فتضيع طلبات وتتأخر أخرى.', p: ['قائمة المطاعم', 'السلة', 'تتبع الطلب', 'لوحة المطعم', 'مناطق التوصيل'],
      m: N('طلبك', ['المطاعم', 'طلباتي']) + H('وجبتك تصلك ساخنة') + T([['شاورما', '4 $'], ['برغر', '5 $'], ['فتّة', '3 $']]) },
    { id: 'cars', cat: 'commerce', sy: 1, t: 'سوق السيارات', s: 'رمادي وبرتقالي', d: 'إعلانات سيارات مع بحث بالمحافظة والسعر وحسابات للبائعين.', n: 'إعلانات السيارات مبعثرة بين مجموعات التواصل، ويصعب البحث فيها أو الوثوق بها.', p: ['البحث والتصفية', 'تفاصيل السيارة', 'إضافة إعلان', 'حسابات البائعين', 'المفضلة'],
      m: N('سيارتي', ['للبيع', 'أضف إعلانًا']) + H('سيارة بسعر واضح') + ONE('كيا ريو 2016', '112 ألف كم، حلب', '7,500 $') + B('تواصل مع البائع') },
    { id: 'bac', cat: 'tech', sy: 1, t: 'منصة الشهادة الثانوية', s: 'أخضر هادئ', d: 'مواد ووحدات وملخصات واختبارات تجريبية مع متابعة التقدم.', n: 'الطالب يحتاج خطة مراجعة واختبارات في مكان واحد، وتعمل بسرعة على إنترنت ضعيف.', p: ['المواد والوحدات', 'الدروس', 'اختبارات تجريبية', 'متابعة التقدم', 'تحميل للمراجعة دون اتصال'],
      m: N('بكالوريا', ['المواد', 'اختبارات']) + H('راجع بخطة واضحة') + P(['رياضيات', 'فيزياء', 'كيمياء'], 1) + M([['الوحدة 1', 90], ['الوحدة 2', 55], ['الوحدة 3', 20]]) },
    { id: 'jobs', cat: 'services', sy: 1, t: 'فرص عمل وعمل عن بعد', s: 'داكن بأخضر زمردي', d: 'وظائف محلية وعن بعد، وملف للمتقدم ولوحة لصاحب العمل.', n: 'كثير من الخريجين والمستقلين لا يجدون منصة تجمعهم بأصحاب العمل.', p: ['قائمة الوظائف', 'تفاصيل وظيفة', 'ملف المتقدم', 'لوحة صاحب العمل', 'قسم المستقلين'],
      m: N('شغلك', ['الوظائف', 'مستقلون']) + H('وظيفتك التالية قريبة') + R([['مطوّر واجهات', 'عن بعد'], ['محاسب', 'دمشق'], ['مصمم جرافيك', 'حلب']]) + B('قدّم الآن') }
  ];

  var grid = document.getElementById('gx-grid');
  if (!grid) return;
  var byId = {};
  grid.innerHTML = S.map(function (x) {
    byId[x.id] = x;
    return '<article class="gx-card" data-cat="' + x.cat + '" data-sy="' + (x.sy ? 1 : 0) + '">' +
      '<div class="gx-frame" aria-hidden="true"><div class="gx-bar"><i></i><i></i><i></i></div><div class="gx-mock gx-t-' + x.id + '">' + x.m + '</div></div>' +
      '<div class="gx-meta"><h3><button type="button" class="gx-open" data-id="' + x.id + '">' + x.t + '</button></h3><span>' + x.s + '</span>' +
      (x.sy ? '<em class="gx-tag">للسوق السوري</em>' : '') + '</div></article>';
  }).join('');

  var dlg = document.getElementById('gd');
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.gx-open');
    if (!b) return;
    var x = byId[b.dataset.id];
    var m = b.closest('.gx-card').querySelector('.gx-mock').cloneNode(true);
    var host = document.getElementById('gd-m');
    host.innerHTML = '';
    host.appendChild(m);
    document.getElementById('gd-t').textContent = x.t;
    document.getElementById('gd-d').textContent = x.d;
    var n = document.getElementById('gd-n');
    n.hidden = !x.n;
    n.innerHTML = x.n ? '<b>المشكلة التي يحلها</b><p></p>' : '';
    if (x.n) n.querySelector('p').textContent = x.n;
    document.getElementById('gd-l').innerHTML = x.p.map(function (i) { return '<li>' + i + '</li>'; }).join('');
    var cs = getComputedStyle(m);
    document.getElementById('gd-s').innerHTML = ['--g-bg', '--g-ink', '--g-ac', '--g-soft'].map(function (v) {
      var c = cs.getPropertyValue(v).trim();
      return '<i title="' + c + '" style="background:' + c + '"></i>';
    }).join('');
    dlg.showModal();
  });
  dlg.querySelector('.gx-x').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  document.getElementById('gd-c').addEventListener('click', function () { dlg.close(); });

  var chips = document.querySelectorAll('.gx-chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (o) { o.setAttribute('aria-pressed', o === c ? 'true' : 'false'); });
      var f = c.dataset.f;
      grid.querySelectorAll('.gx-card').forEach(function (k) {
        k.hidden = !(f === 'all' || (f === 'sy' ? k.dataset.sy === '1' : k.dataset.cat === f));
      });
    });
  });

  /* mobile menu: close after choosing a link or tapping outside */
  var mm = document.querySelector('.mm');
  if (mm) {
    mm.addEventListener('click', function (e) { if (e.target.closest('a')) mm.open = false; });
    document.addEventListener('click', function (e) { if (mm.open && !mm.contains(e.target)) mm.open = false; });
  }
})();
