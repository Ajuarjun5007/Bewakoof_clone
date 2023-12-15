    <div
                className="addButtons fixed bottom-0 left-0 z-50 md:z-0
 h-14 w-full md:static md:mb-5 flex shadow-md md:shadow-none rotate-180 
 md:rotate-0 gap-4 p-2 pb-[10px] md:p-0 items-center justify-between font-medium"
              >
                <button
                  onClick={handleAddedToBag}
                  className="h-11 rotate-180 md:rotate-0 flex-1 bg-[#ffd84d] 
                  flex items-center md:rounded-none justify-center rounded-sm hover:shadow-md transition-all"
                >
                  {isAddedToCart ? (
                    <img className="w-5 h-5" src={bag_black_img} alt="bag" />
                  ) : (
                    <img className="w-5 h-5" src={bag_white_img} alt="bag" />
                  )}
                  <p className="text-black text-sm pl-2">
                    {isAddedToCart ? "GO" : "ADD"} TO BAG
                  </p>

                  {openSizeModal && (
                    <div
                      className="w-full h-full bg-[#0000007a] relative flex flex-col justify-end md:justify-center"
                      onClick={handleModalClose}
                    >
                      <div className="popup bg-white rounded-2xl md:rounded-xl md:overflow-hidden w-full mt-auto md:m-auto md:max-w-lg">
                        <div className="flex flex-col items-center p-4">
                          <div className="bar w-10 h-[2px] bg-[#4e5664] mb-3 rounded-xl"></div>
                          <div className="titleIconContainer flex items-center justify-between w-full">
                            <h1 className="popupTitle text-sm font-bold text-[#292d35]">
                              Choose your perfect fit!
                            </h1>
                            <span className="opacity-70" onClick={onClose}>
                              <AiOutlineClose className="w-6 h-6" />
                            </span>
                          </div>
                        </div>
                        <div className=" bg-[#f2f2f4] p-2 md:p-0">
                          <div className="bg-white p-4">
                          <div className="flex">
                {sizes.map((item) => (
                  <div
                    className={`text-sm cursor-pointer rounded-md w-[46px] h-[46px] mr-3 mb-3 px-5 border-1 
      ${
        selectedSize === item
          ? "bg-black text-white border-[1px] border-[#42a2a2] solid"
          : "bg-white text-black border-[1px] border-[#000000] solid"
      } 
      solid flex items-center justify-center hover:border-[1px] hover:border-[#42a2a2] solid`}
                    onClick={() => selectedSizeHandler(item)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
                            <button
                              disabled={selectedSize === null}
                              onClick={handleClick}
                              className={`uppercase cursor-pointer h-10 w-full font-medium 
                              border-none outline-none flex justify-center mt-2 items-center 
                              rounded-md text-white bg-[#42a2a2] hover:bg-opacity-80`}
                            >
                              DONE
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
                <button
                  onClick={handleWishlisted}
                  className={`h-11 hidden md:flex flex-1 items-center justify-center border rounded-sm hover:shadow-md transition-all ${
                    wishlisted ? "border-black" : ""
                  }`}
                >
                  {wishlisted ? (
                    <img className="w-6 h-6" src={wishlisted_img} alt="bag" />
                  ) : (
                    <img className="w-6 h-6" src={{ wishlist_img }} alt="bag" />
                  )}
                  <p
                    className={`${
                      wishlisted ? "text-black" : "text-[#949494]"
                    } text-sm pl-2`}
                  >
                    {wishlisted ? "WISHLISTED" : "WISHLIST"}
                  </p>
                </button>
              </div>