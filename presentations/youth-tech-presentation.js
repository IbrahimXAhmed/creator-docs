const slideData = [
  {
    title: 'لماذا الموضوع مهم؟',
    points: [
      'التكنولوجيا تقلّل فجوة المهارات بين الشباب وسوق العمل.',
      'المنصات الرقمية تختصر وقت الوصول لفرص وظيفية.',
      'المشروع الرقمي يبدأ بتكلفة أقل من المشروع التقليدي.',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'التدريب الإلكتروني',
    points: [
      'مسارات في التسويق الرقمي والبرمجة وتحليل البيانات.',
      'تعلم مرن من الهاتف أو الكمبيوتر.',
      'شهادات تدعم السيرة الذاتية والتوظيف.',
    ],
    image:
      'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'التوظيف عبر المنصات',
    points: [
      'تحسين LinkedIn وCV بالكلمات المفتاحية.',
      'متابعة وظائف يومية عبر منصات العمل.',
      'بناء حضور مهني عبر المحتوى.',
    ],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'خطة التسويق الرقمي',
    points: [
      'SEO + إعلانات ممولة + بريد إلكتروني.',
      'محتوى تعليمي وترويجي وتفاعلي.',
      'تحليل مؤشرات الأداء شهريًا.',
    ],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'خطة 90 يوم',
    points: [
      'الشهر 1: تأسيس الموقع والمحتوى.',
      'الشهر 2: حملات ممولة وتوسيع النشر.',
      'الشهر 3: تحسين النتائج والتوسع.',
    ],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
  },
];

const comparisonRows = [
  {
    tool: 'WordPress',
    advantage: 'مرونة عالية وإضافات كثيرة',
    bestFor: 'التخصيص المتقدم',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tool: 'Wix',
    advantage: 'سهل وسريع بدون كود',
    bestFor: 'المبتدئين',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tool: 'Squarespace',
    advantage: 'قوالب بصرية أنيقة',
    bestFor: 'العلامات التجارية المرئية',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80',
  },
];

const slidesContainer = document.querySelector('#slides');

slidesContainer.innerHTML = slideData
  .map(
    (slide, index) => `
      <article class="slide-card">
        <img src="${slide.image}" alt="${slide.title}" loading="lazy" />
        <div class="slide-content">
          <span class="slide-index">شريحة ${index + 1}</span>
          <h3>${slide.title}</h3>
          <ul>
            ${slide.points.map((point) => `<li>${point}</li>`).join('')}
          </ul>
        </div>
      </article>
    `
  )
  .join('');

const comparisonContainer = document.querySelector('#comparison');
comparisonContainer.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>الأداة</th>
        <th>الميزة</th>
        <th>مناسبة لـ</th>
        <th>صورة مرجعية</th>
      </tr>
    </thead>
    <tbody>
      ${comparisonRows
        .map(
          (row) => `
            <tr>
              <td>${row.tool}</td>
              <td>${row.advantage}</td>
              <td>${row.bestFor}</td>
              <td><img src="${row.image}" alt="${row.tool}" width="96" height="56" style="object-fit:cover;border-radius:8px" loading="lazy" /></td>
            </tr>
          `
        )
        .join('')}
    </tbody>
  </table>
`;
