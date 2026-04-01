import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBolt, FaFire, FaStar } from 'react-icons/fa';

const spotlightSlides = [
  {
    eyebrow: 'Flash Drop',
    title: 'Neon tailoring for after-dark arrivals.',
    copy: 'Metallic layers, sharp cuts, and limited-run looks built to stop the scroll.',
    accent: 'from-fuchsia-500 via-orange-400 to-amber-300',
    badge: 'Just Landed'
  },
  {
    eyebrow: 'Street Luxe',
    title: 'Heat-reactive fits with runway energy.',
    copy: 'Graphic outerwear and stacked essentials tuned for bold city nights.',
    accent: 'from-cyan-400 via-sky-500 to-indigo-500',
    badge: 'Trending Now'
  },
  {
    eyebrow: 'Weekend Edit',
    title: 'Statement denim, polished layers, zero quiet pieces.',
    copy: 'Build an instant head-turning rotation with premium textures and dramatic contrast.',
    accent: 'from-emerald-400 via-lime-300 to-yellow-300',
    badge: '48h Offer'
  }
];

const campaignStats = [
  { label: 'New Season', value: '120+' },
  { label: 'Exclusive Drops', value: '24' },
  { label: 'Style Rating', value: '4.9' }
];

const Home = ({ categories, featuredProducts }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % spotlightSlides.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const currentSlide = spotlightSlides[activeSlide];

  return (
    <div className="space-y-12 bg-stone-100 py-8">
      <section className="mx-4 overflow-hidden rounded-[2rem] border border-white/60 bg-[#120c10] text-white shadow-[0_30px_80px_rgba(18,12,16,0.28)]">
        <div className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,146,0.35),_transparent_32%),radial-gradient(circle_at_80%_15%,_rgba(255,214,10,0.24),_transparent_24%),linear-gradient(135deg,_rgba(255,255,255,0.06),_transparent_48%)]" />
          <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-fuchsia-500/25 blur-3xl flash-orb" />
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-orange-400/20 blur-3xl flash-orb-delayed" />
          <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl flash-orb" />

          <div className="relative grid gap-10 px-6 py-8 md:px-10 lg:grid-cols-[1.25fr_0.9fr] lg:px-12 lg:py-12">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/90 backdrop-blur">
                  <FaBolt className="text-[0.7rem] text-amber-300" />
                  Header Campaign
                </span>
                <span className={`inline-flex rounded-full bg-gradient-to-r ${currentSlide.accent} px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#120c10]`}>
                  {currentSlide.badge}
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/90">
                {currentSlide.eyebrow}
              </p>
              <h1 className="max-w-2xl text-4xl font-black uppercase leading-none text-white md:text-6xl">
                Flash-fit fashion for the front row.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                {currentSlide.title} {currentSlide.copy}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products/Clothing"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#120c10] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Shop The Drop
                  <FaArrowRight />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition-colors duration-300 hover:bg-white/12"
                >
                  Explore All Styles
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {campaignStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px]">
              <div className="flash-panel absolute inset-x-0 top-0 rounded-[2rem] border border-white/12 bg-white/8 p-5 backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/55">Live Edit</p>
                    <p className="mt-2 text-2xl font-black uppercase">Night Shift</p>
                  </div>
                  <div className="rounded-full bg-orange-300 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#120c10]">
                    60% Off
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className={`rounded-[1.75rem] bg-gradient-to-br ${currentSlide.accent} p-[1px] shadow-[0_24px_50px_rgba(0,0,0,0.25)]`}>
                    <div className="rounded-[1.7rem] bg-[#171116] px-5 py-6">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/50">Featured Capsule</p>
                      <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white">
                        Chrome jackets.
                        <br />
                        Liquid shine.
                      </h3>
                      <div className="mt-5 flex items-center justify-between text-sm text-white/72">
                        <span>From ₹1,499</span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                          Limited
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/55">Why It Pops</p>
                      <ul className="mt-4 space-y-3 text-sm text-white/78">
                        <li className="flex items-center gap-3">
                          <FaFire className="text-orange-300" />
                          Reflective fabrics with motion-ready shine
                        </li>
                        <li className="flex items-center gap-3">
                          <FaFire className="text-orange-300" />
                          Sharp layering for day-to-night styling
                        </li>
                        <li className="flex items-center gap-3">
                          <FaFire className="text-orange-300" />
                          Short-run pieces that feel exclusive
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                      <p className="text-xs uppercase tracking-[0.32em] text-white/55">Campaign Pulse</p>
                      <div className="mt-4 flex items-center gap-2 text-amber-300">
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-white">Editor-rated drop</span>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {spotlightSlides.map((slide, index) => (
                          <button
                            key={slide.eyebrow}
                            type="button"
                            onClick={() => setActiveSlide(index)}
                            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                              activeSlide === index
                                ? 'bg-white text-[#120c10]'
                                : 'bg-white/8 text-white/70 hover:bg-white/14'
                            }`}
                            aria-pressed={activeSlide === index}
                          >
                            {slide.eyebrow}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-4 -left-1 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white/85 backdrop-blur-md">
                Free express delivery over ₹2,999
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-7">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.name}`}
              className="group block rounded-2xl border border-black/5 bg-white p-3 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-lg transition-transform duration-300 group-hover:scale-110">
                <span>{category.icon}</span>
              </div>
              <h3 className="truncate text-sm font-semibold text-black">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Featured Products</h2>
          <Link
            to="/products"
            className="flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:text-neutral-600"
          >
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(15,23,42,0.14)]"
            >
              <Link to={`/product/${product.id}`}>
                <div className="h-52 bg-stone-100">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 text-left">
                  <h3 className="mb-1 font-semibold text-black">{product.name}</h3>
                  <div className="mb-3 flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={index < Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}
                        size={14}
                      />
                    ))}
                    <span className="ml-2 text-xs text-gray-500">({product.reviewCount})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black">₹{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes flash-orbit {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, -14px, 0) scale(1.08); }
        }

        @keyframes flash-panel-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .flash-orb {
          animation: flash-orbit 9s ease-in-out infinite;
        }

        .flash-orb-delayed {
          animation: flash-orbit 11s ease-in-out infinite reverse;
        }

        .flash-panel {
          animation: flash-panel-float 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .flash-orb,
          .flash-orb-delayed,
          .flash-panel {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
