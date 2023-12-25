import './App.css'
import React, { useState } from 'react';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import ProductContainer from './components/ProductContainer';


const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: ' Galaxy S23 Ultraگوشی موبایل سامسونگ مدل ', price: 47000000, description: 'سامسونگ Galaxy S23 Ultra به‌عنوان گل سرسبد گوشی‌های هوشمند خانواده S23 با بهره بردن از مشخصات فنی قدرتمند معرفی شد. در نگاه اول از نظر طراحی در نظر گرفته شده، سامسونگ Galaxy S23 Ultra به نسبت نسل قبلی یعنی Galaxy S22 Ultra تغییرات زیادی نداشته و تقریبا هر دو گوشی از طراحی مشابهی بهره بردند. اما باید بدانید که Galaxy S23 Ultra به نسبت نسل قبلی، قدرتمند‌تر از همیشه وارد میدان رقابت شده است. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش شگفت‌انگیز با ابعاد 6.8 اینچ و رزولوشن 1440×3088 پیکسل از نوع Dynamic AMOLED 2X مجهز شده.' , img : ""  },
    { id: 2, name: ' Tune Flex هدفون بلوتوثی جی بی ال مدل ', price: 4150000, description: 'کمترین حواس‌پرتی در حین گوش دادن به موسیقی و پادکست را می‌توانید با هدفون بی‌سیم جی بی ال مدل Tune Flex تجربه کنید. محبوبیت این هدفون در بین خریداران به عوامل زیادی وابسته است که ازجمله مهم‌ترین آن‌ها می‌توان به فناوری نویزکنسلینگ و باتری قوی این دستگاه اشاره کرد. همچنین این هدفون دارای گزینه Ambient است که با انتخاب آن می‌توانید نویزکنسلینگ را خاموش کنید و به صدای محیط گوش دهید. هدفون بی‌سیم جی بی ال به کمک محفظه شارژ خود تا بیش از 24 ساعت شارژ را نگه می‌دارد و همچنین فقط با 10 دقیقه شارژ می‌توانید به مدت 2 ساعت کامل از آن استفاده کنید.' ,img : "" },
    { id: 3, name: 'ROG Strix G513IE-HN060 لپ تاپ ایسوس ', price: 47000000, description: 'لپ ‌تاپ ROG Strix G513IE-HN060 از محصولات شرکت «ایسوس» محسوب می‌شود که با طراحی زیبا روانه بازار شده است. بدنه‌ شیک ROG Strix G513IE-HN060 به‌ گونه‌ای طراحی شده که لپ‌ تاپی رده ‌بالا را نوید می‌‌دهد. این لپ تاپ و 2.1 کیلوگرم وزن دارد و برای جا‌به‌‌جایی دائمی آن مشکل خاصی نخواهید داشت. صفحه ‌نمایش 15.6 اینچی این محصول دارای وضوح تصویر FullHD است. پورت‌های USB و HDMI روی لبه ‌های این مدل از ایسوس دیده می‌‌شود که با استفاده از آن‌‌ها می‌توان انواع ابزارهای جانبی را بدون نیاز به هیچ مبدلی به این لپ‌ تاپ متصل و از آن ‌ها استفاده کرد.' , img : ""},
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='Main'>
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductContainer>
        <h2 className='h2pro'>لیست محصولات</h2>
        {products.map((product) => (
          <Product key={product.id} product={product} onProductClick={handleProductClick} />
        ))}
       </ProductContainer>  
    </div>
  );
};

export default App;
