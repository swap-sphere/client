import Banner from "../../components/molecules/Banner/Banner"

const Home = () => {
  const products = [
    {
      id: 1,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 2,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 3,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 4,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 5,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 6,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 7,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    },
    {
      id: 8,
      title: "Levi's Jeans",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, inventore.",
      price: "400 USD",
      image: ""
    }
  ]

  return (
    <div>
      <Banner />
      {/* <div className="relative mx-4">
        <div className="absolute w-full -top-[200px]">
          <div className="py-2 px-4 text-sm bg-white flex justify-center items-center">
            <span>
              You are on a clone of Amazon.com. If you would like to shop for real items, please visit the official website at <a className="text-blue-600" href="https://amazon.com">amazon.com</a>
            </span>
          </div>
        </div>
      </div> */}

      <div className="relative">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
          {
            products.map(product => (
              <div className="bg-white h-auto border-[1px] border-gray-200 border-solid py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 cursor-pointer">
                <div className="w-full h-auto flex items-center justify-center">
                  <img className="w-52 h-64 object-contain" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_2x_v2._SY608_CB573698005_.jpg" alt="" />
                </div>
                <div className="flex justify-between px-4">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{product.title.substring(0, 20)}</h2>
                  <p>{product.price}</p>
                </div>
                <div className="px-4">
                  <p className="text-sm">{product.description}</p>
                </div>
                <div className="px-4">
                </div>
                <div className="px-4"></div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Home