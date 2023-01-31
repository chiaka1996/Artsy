import NavBar from '../../Components/NavBar/NavBar';
import Sidebar from '../../Components/SideBar/SideBar';
import css from '../../styles/market.module.css';
import Image from 'next/image';
import Product from '../../Components/Market/Products';
import Footer from '../../Components/Footer/Footer';
import { BarState } from '../../Context/Allcontext';
import Link from 'next/link';

const Market = () => {
  const { products } = BarState();
  return (
    <div className={css.marketBody}>
      <NavBar page="market" />
      <Sidebar page="market" />
      <div className={css.productLinkMarket}>
        Home/ Marketplace/ <span style={{ color: 'black' }}>Editorials</span>
      </div>

      <div className={css.searchContainer}>
        <div className={css.filtersContainer}>
          <div className={css.inputContainer}>
            <input type="text" placeholder="Search" className={css.search} />
          </div>

          <div className={css.filter}>
            <Image
              src="/filter.png"
              className={css.filterImg}
              alt="filter"
              width={35}
              height={39}
            />
            <div className={css.filterText}>Filter</div>
          </div>

          <div className={css.byCategory}>
            <div className={css.categoryText}>By category</div>
            <Image
              src="/categoryArrow.png"
              alt="arrow up"
              width={16}
              height={9}
              className={css.categoryImage}
            />
          </div>

          <div className={css.checkboxes}>
            <div className={css.checkContainer}>
              <input type="checkbox" className={css.check} />
              <span>Editorial</span>
            </div>

            <div className={css.checkContainer}>
              <input type="checkbox" className={css.check} />
              <span>Fashion</span>
            </div>

            <div className={css.checkContainer}>
              <input type="checkbox" className={css.check} />
              <span>Optics</span>
            </div>

            <div className={css.checkContainer}>
              <input type="checkbox" className={css.check} />
              <span>Art & Museum</span>
            </div>

            <div className={css.checkContainer}>
              <input type="checkbox" className={css.check} />
              <span> Nature</span>
            </div>
          </div>

          <div className={css.byCategory}>
            <div className={css.categoryText}>By price</div>
            <Image
              src="/categoryArrow.png"
              alt="arrow up"
              width={16}
              height={9}
              className={css.categoryImage}
            />
          </div>

          <div className={css.price}>$100.00 - $150.00</div>

          <div className={css.byCategory}>
            <div className={css.categoryText}>By artist</div>
            <Image
              src="/categoryArrow.png"
              alt="arrow up"
              width={16}
              height={9}
              className={css.categoryImage}
            />
          </div>
          <div>
            <div className={css.all}>All</div>
            <div className={css.price}>$100.00 - $150.00</div>
            <div className={css.price}>$150.00 - $200.00</div>
            <div className={css.price}>$200.00 - $250.00</div>
            <div className={css.price}>Above $250.00</div>
          </div>

          <div className={css.byCategory}>
            <div className={css.categoryText}>Collection year</div>
            <Image
              src="/categoryArrow.png"
              alt="arrow up"
              width={16}
              height={9}
              className={css.categoryImage}
            />
          </div>
        </div>

        <div className={css.productsContainer}>
          <div className={css.results}>
            <span>See 1-6 0f 15 results</span>
            <button>
              Sort by
              <Image
                src="/down_arrow.png"
                alt="down arrow"
                width={16}
                height={9}
                style={{ margin: '0 0 0 10%' }}
              />
            </button>
          </div>

          <div className={css.resultMobile}>
            <div className={css.seeResult}>Showing 1-5 of 18 results</div>
            <div className={css.resultFlex}>
              <div className={css.textContainer}>
                <span>Filters</span>
                <Image
                  src="/down_arrow.png"
                  alt="down arrow"
                  width={12}
                  height={9}
                  className={css.mobileArrow}
                />
              </div>
              <div className={css.textContainer}>
                <span>Sort by</span>
                <Image
                  src="/down_arrow.png"
                  alt="down arrow"
                  width={12}
                  height={9}
                  className={css.mobileArrow}
                />
              </div>
            </div>
          </div>

          <div className={css.prods}>
            {products.map((prod, i) => (
              <Link
                href={`/market/${prod.id}`}
                key={i}
                style={{ textDecoration: 'none' }}
              >
                <Product
                  img={prod.image}
                  name={prod.name}
                  price={prod.price}
                  id={prod.id}
                />
              </Link>
            ))}
          </div>
          <div className={css.btnContainer}>
            <button>See more</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Market;
