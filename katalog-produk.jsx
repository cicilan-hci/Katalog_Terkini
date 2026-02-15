import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const CatalogApp = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const products = [
    // HANDPHONE
    {
      id: 1,
      name: 'Smartphone Flagship Pro',
      price: 8500000,
      category: 'handphone',
      image: '📱',
      rating: 4.9,
      reviews: 567,
      cicilan: [
        { bulan: 3, cicilan: 2850000 },
        { bulan: 6, cicilan: 1480000 },
        { bulan: 12, cicilan: 830000 }
      ]
    },
    {
      id: 2,
      name: 'Smartphone Mid Range',
      price: 4500000,
      category: 'handphone',
      image: '📱',
      rating: 4.6,
      reviews: 312,
      cicilan: [
        { bulan: 3, cicilan: 1500000 },
        { bulan: 6, cicilan: 780000 },
        { bulan: 12, cicilan: 440000 }
      ]
    },
    {
      id: 3,
      name: 'Smartphone Budget Terjangkau',
      price: 2200000,
      category: 'handphone',
      image: '📱',
      rating: 4.4,
      reviews: 198,
      cicilan: [
        { bulan: 3, cicilan: 740000 },
        { bulan: 6, cicilan: 380000 },
        { bulan: 12, cicilan: 210000 }
      ]
    },

    // LAPTOP
    {
      id: 4,
      name: 'Laptop Gaming RTX 4090',
      price: 25000000,
      category: 'laptop',
      image: '💻',
      rating: 4.9,
      reviews: 423,
      cicilan: [
        { bulan: 3, cicilan: 8350000 },
        { bulan: 6, cicilan: 4350000 },
        { bulan: 12, cicilan: 2450000 }
      ]
    },
    {
      id: 5,
      name: 'Laptop Ultrabook Premium',
      price: 15000000,
      category: 'laptop',
      image: '💻',
      rating: 4.8,
      reviews: 289,
      cicilan: [
        { bulan: 3, cicilan: 5050000 },
        { bulan: 6, cicilan: 2600000 },
        { bulan: 12, cicilan: 1450000 }
      ]
    },
    {
      id: 6,
      name: 'Laptop Kerja Efisien',
      price: 8000000,
      category: 'laptop',
      image: '💻',
      rating: 4.5,
      reviews: 156,
      cicilan: [
        { bulan: 3, cicilan: 2670000 },
        { bulan: 6, cicilan: 1400000 },
        { bulan: 12, cicilan: 780000 }
      ]
    },

    // ELEKTRONIK
    {
      id: 7,
      name: 'Headphone Wireless Premium',
      price: 2200000,
      category: 'elektronik',
      image: '🎧',
      rating: 4.9,
      reviews: 412,
      cicilan: [
        { bulan: 3, cicilan: 740000 },
        { bulan: 6, cicilan: 380000 },
        { bulan: 12, cicilan: 210000 }
      ]
    },
    {
      id: 8,
      name: 'Monitor 4K Ultra',
      price: 5500000,
      category: 'elektronik',
      image: '🖼️',
      rating: 4.7,
      reviews: 298,
      cicilan: [
        { bulan: 3, cicilan: 1850000 },
        { bulan: 6, cicilan: 960000 },
        { bulan: 12, cicilan: 540000 }
      ]
    },
    {
      id: 9,
      name: 'Keyboard Mechanical RGB',
      price: 1800000,
      category: 'elektronik',
      image: '⌨️',
      rating: 4.8,
      reviews: 521,
      cicilan: [
        { bulan: 3, cicilan: 600000 },
        { bulan: 6, cicilan: 310000 },
        { bulan: 12, cicilan: 175000 }
      ]
    },
    {
      id: 10,
      name: 'Mouse Gaming Pro',
      price: 900000,
      category: 'elektronik',
      image: '🖱️',
      rating: 4.6,
      reviews: 234,
      cicilan: [
        { bulan: 3, cicilan: 300000 },
        { bulan: 6, cicilan: 155000 },
        { bulan: 12, cicilan: 85000 }
      ]
    },

    // KAMERA
    {
      id: 11,
      name: 'Kamera DSLR Professional',
      price: 18000000,
      category: 'kamera',
      image: '📷',
      rating: 4.9,
      reviews: 345,
      cicilan: [
        { bulan: 3, cicilan: 6050000 },
        { bulan: 6, cicilan: 3150000 },
        { bulan: 12, cicilan: 1760000 }
      ]
    },
    {
      id: 12,
      name: 'Mirrorless Kompak',
      price: 12000000,
      category: 'kamera',
      image: '📷',
      rating: 4.8,
      reviews: 267,
      cicilan: [
        { bulan: 3, cicilan: 4050000 },
        { bulan: 6, cicilan: 2100000 },
        { bulan: 12, cicilan: 1170000 }
      ]
    },
    {
      id: 13,
      name: 'Action Camera 4K',
      price: 3500000,
      category: 'kamera',
      image: '📷',
      rating: 4.7,
      reviews: 189,
      cicilan: [
        { bulan: 3, cicilan: 1170000 },
        { bulan: 6, cicilan: 610000 },
        { bulan: 12, cicilan: 340000 }
      ]
    },

    // FURNITURE
    {
      id: 14,
      name: 'Kursi Gaming Ergonomis',
      price: 3500000,
      category: 'furniture',
      image: '🪑',
      rating: 4.5,
      reviews: 189,
      cicilan: [
        { bulan: 3, cicilan: 1170000 },
        { bulan: 6, cicilan: 610000 },
        { bulan: 12, cicilan: 340000 }
      ]
    },
    {
      id: 15,
      name: 'Meja Kerja Minimalis',
      price: 2800000,
      category: 'furniture',
      image: '🖥️',
      rating: 4.6,
      reviews: 156,
      cicilan: [
        { bulan: 3, cicilan: 940000 },
        { bulan: 6, cicilan: 490000 },
        { bulan: 12, cicilan: 275000 }
      ]
    },
    {
      id: 16,
      name: 'Lampu LED Smart',
      price: 1200000,
      category: 'furniture',
      image: '💡',
      rating: 4.4,
      reviews: 234,
      cicilan: [
        { bulan: 3, cicilan: 400000 },
        { bulan: 6, cicilan: 210000 },
        { bulan: 12, cicilan: 120000 }
      ]
    },
    {
      id: 17,
      name: 'Rak Display Modern',
      price: 1600000,
      category: 'furniture',
      image: '📚',
      rating: 4.5,
      reviews: 123,
      cicilan: [
        { bulan: 3, cicilan: 540000 },
        { bulan: 6, cicilan: 280000 },
        { bulan: 12, cicilan: 160000 }
      ]
    }
  ];

  const filteredProducts = filterCategory === 'all' 
    ? products 
    : products.filter(p => p.category === filterCategory);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)' }}>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-white" style={{ fontFamily: 'system-ui, -apple-system' }}>
              KATALOG<span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff, #ff006e)' }}>.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-1">Produk Pilihan Terbaik</p>
          </div>

        </div>
      </header>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 flex-wrap mb-12">
          {[
            { key: 'all', label: '🛍️ Semua Produk' },
            { key: 'handphone', label: '📱 Handphone' },
            { key: 'laptop', label: '💻 Laptop' },
            { key: 'elektronik', label: '🎧 Elektronik' },
            { key: 'kamera', label: '📷 Kamera' },
            { key: 'furniture', label: '🪑 Furniture' }
          ].map(cat => (
            <button
              key={cat.key}
              onClick={() => setFilterCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                filterCategory === cat.key
                  ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <div 
                className="rounded-2xl p-8 h-64 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,0,110,0.1))',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="text-6xl group-hover:scale-125 transition-transform duration-300">{product.image}</div>
                
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300 text-sm">{product.rating} ({product.reviews})</span>
                  </div>
                  <p className="text-cyan-400 font-black text-xl">{formatPrice(product.price)}</p>
                  <p className="text-gray-400 text-xs mt-2">Mulai cicilan {formatPrice(product.cicilan[0].cicilan)}/bulan</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-2 rounded-lg font-bold text-sm">
                    Lihat Detail →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-end md:items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
          <div 
            className="bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              {/* Product Image & Info */}
              <div className="text-8xl text-center mb-8">{selectedProduct.image}</div>
              
              <h2 className="text-3xl font-black text-white mb-4">{selectedProduct.name}</h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400' : 'text-gray-600'}>★</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{selectedProduct.rating} ({selectedProduct.reviews} ulasan)</span>
              </div>

              {/* Harga */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 rounded-2xl p-6 mb-8">
                <p className="text-gray-400 text-sm mb-2">Harga Tunai</p>
                <p className="text-4xl font-black text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff, #ff006e)' }}>
                  {formatPrice(selectedProduct.price)}
                </p>
              </div>

              {/* Cicilan Options */}
              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-4">Pilihan Cicilan</h3>
                <div className="space-y-3">
                  {selectedProduct.cicilan.map((option, idx) => (
                    <button
                      key={idx}
                      className="w-full p-5 rounded-xl border-2 border-gray-700 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-left">
                          <p className="text-white font-bold text-lg">{option.bulan} Bulan</p>
                        </div>
                        <div className="w-6 h-6 border-2 border-gray-600 rounded-full group-hover:border-cyan-500 group-hover:bg-cyan-500/30 transition-all flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-sm">Cicilan per bulan:</span>
                          <span className="text-cyan-400 font-bold text-lg">{formatPrice(option.cicilan)}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-sm">Total pembayaran:</span>
                          <span className="text-pink-400 font-bold text-sm">{formatPrice(option.cicilan * option.bulan)}</span>
                        </div>
                        {option.cicilan * option.bulan > selectedProduct.price && (
                          <div className="flex justify-between items-baseline pt-2 border-t border-gray-700">
                            <span className="text-gray-500 text-xs">Bunga:</span>
                            <span className="text-orange-400 text-xs font-semibold">
                              +{formatPrice(option.cicilan * option.bulan - selectedProduct.price)}
                            </span>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-gray-800/50 rounded-xl p-4 mb-8 space-y-2">
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-green-400" />
                  <span>Garansi Resmi</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-green-400" />
                  <span>Gratis Ongkos Kirim</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-green-400" />
                  <span>Bisa Dikembalikan 30 Hari</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    const message = `Halo, saya tertarik dengan ${selectedProduct.name}\n\nHarga: ${formatPrice(selectedProduct.price)}\n\nOpsi cicilan yang tersedia:\n${selectedProduct.cicilan.map(c => `- ${c.bulan} bulan: ${formatPrice(c.cicilan)}/bulan`).join('\n')}\n\nSaya ingin informasi lebih lanjut dan melanjutkan pembelian.`;
                    const whatsappURL = `https://wa.me/62?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                  }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span className="text-2xl">💬</span>
                  Hubungi via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogApp;