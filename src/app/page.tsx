import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return (
      <main>
      {/*Hero Section*/}
      <section>
        <div className="bg-[url('/home/img-1.png')] h-screen lg:h-full bg-no-repeat">
        <div className="bg-[url('/home/img-1.1.png')] h-screen lg:h-full bg-no-repeat">
        <div className="font-semibold pt-5 lg:pt-5 text-center text-2xl lg:text-4xl">
        <span className="text-orange-500">Food</span>
        <span className="text-white">luck</span></div>
        
        <div className="flex m-10">
      {/*left Section*/}
      
      <div className="hidden lg:block w-full md:w-auto text-white">
      <ul className="flex lg:flex-row lg:gap-x-5 lg:text-base lg:pt-5">
        <li>
        <Link href="/" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Home </Link>
        </li>
        <li>
        <Link href="/menu" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Menu</Link>
        </li>
        <li>
        <Link href="/blog" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Blog</Link>
        </li>
        <li>
          <Link href="/pages" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Pages</Link>
        </li>
        <li>
        <Link href="/about" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> About</Link>
        </li>
        <li>
        <Link href="/shop" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Shop</Link>
        </li>
        <li>
        <Link href="/contact" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Contact</Link>
        </li>
      </ul>
      </div>

      <Sheet>
            <SheetTrigger className="lg:hidden">
            <Menu className="bg-orange-500"/>
            </SheetTrigger>
            <SheetContent>
                        <ul className="space-x-5">
                            <li className="flex flex-col space-x-5 text-xl m-5">
                            </li>
                            <li>
                            <Link href="/" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Home </Link>
                            </li>
                            <li>
                            <Link href="/menu" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Menu</Link>
                            </li>
                            <li>
                            <Link href="/blog" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Blog</Link>
                            </li>
                            <li>
                              <Link href="/pages" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Pages</Link>
                            </li>
                            <li>
                            <Link href="/about" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> About</Link>
                            </li>
                            <li>
                            <Link href="/shop" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Shop</Link>
                            </li>
                            <li>
                            <Link href="/contact" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Contact</Link>
                            </li>
                    </ul>
            </SheetContent>
            </Sheet>



      {/*right Section*/}
      <div className="flex-1 text-right lg:pt-7">
            <div className="flex gap-2 md:gap-3 px-3">
          <div className="flex-1 flex-col gap-5 px-6">
          <button className="text-white border-2 border-orange-500 rounded-full px-10 lg:px-24">
            Search
          </button>
          </div>
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>

      </div>
      </div>
      </div>
     
      {/*1st Section*/}
    
      <div className="flex">
      {/*left Section*/}
      <div className="lg:w-auto text-white md:px-10">
      <div className="md:flex lg:flex-row lg:gap-x-8 lg:text-base lg:pb-10">
            <div className="hidden md:block lg:px-4 ">
            <Image width={100} height={300} src="/home/img-5.png" alt="food"/>
            </div>
            <div className="pt-5 lg:pt-10 pb-5 lg:pb-10 px-10 md:px-3">
              <h2 className="text-orange-500 text-xs md:text-base">
                Its Quick & amusing!</h2>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl pt-3 lg:pt-5 font-bold">
              <span className="text-orange-500">
                Th</span>
              <span className="text-white">
                e Art of speed food Quality</span>
                </h1>
              <p className="pt-5 lg:pt-10 pb-5 lg:pb-10 pr-8 text-justify text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum, debitis ratione expedita, quas deserunt voluptatibus
                doloremque beatae sequi atque ullam natus in nisi vitae 
                aspernatur fugiat accusamus consequatur dolore ex.
            </p>
            <Button className="bg-orange-500 hover:border-2 hover:border-orange-500 rounded-full px-5 md:px-10 pt-2 md:pt-2 pb-2 md:pb-2
            text-xs md:text-base">See Menu</Button>
            </div>

      {/*right Section*/}
      
      
      
      <div>
      <Image src="/home/img-2.png" alt="food" width={1800} height={1000}/>
      </div>



          </div>
          </div>
        </div>
        </div> 
      </div>
      </section>
      
        {/*2nd Section*/}
        <section>
      {/*left Section*/}
      <div className="md:flex gap-0 w-full lg:w-auto bg-black text-white">
     
      <div className="flex-1 pt-80 sm:pt-96 md:pt-10 lg:pt-20 lg:pb-10 px-10 lg:px-14">
        <h2 className="text-orange-500">about us</h2>
        <h1 className="lg:text-5xl font-bold lg:font-extrabold pt-5 pb-5 lg:pb-0"><span className="text-orange-500">We</span> Create the best foody product</h1>
        <p className="lg:pt-10 text-xs lg:text-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptate nam unde vero quae sint? Ab, aliquid debitis, tenetur sed dicta ipsa unde ullam suscipit nihil commodi ut porro repellat!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus voluptatem blanditiis itaque totam, amet molestias facere asperiores nemo ad doloribus tempora excepturi voluptatum, impedit delectus, dicta magnam numquam veritatis!
          </p>
        <ul className="leading-8 lg:leading-10 pt-5 lg:pt-5 px-10 lg:px-5 list-disc text-xs">
          <li>Lacus nisi, et ac dapibus sit ev vuei ri ndsdoji.</li>
          <li>Lacus nisi, et ac dapibus sit ev vuei ri ndsdoji.</li>
          <li>Lacus nisi, et ac dapibus sit ev vuei ri ndsdoji.</li>
        </ul>
        <div className="pt-5 lg:pt-5">
          <Button className="lg:text-sm bg-orange-500 rounded-full 
          lg:px-10 lg:pt-4 lg:pb-4 text-xs
          hover:bg-transparent hover:border-2 hover:border-orange-500">Read More</Button>
        </div>
      </div>


        {/*right Section*/}
        <div className="flex-1 lg:pt-20 lg:px-10">
         <div className="grid grid-rows-2">
          <div className="px-10 pt-10 lg:pt-0 lg:pr-5">
          <Image width={600} height={500} src="/home/img-6.png" alt="food"/>
          </div>
          <div className="flex gap-3 sm:gap-5 pt-3">
          <Image width={250} height={200} src="/home/img-7.png" alt="food" className="pl-10 md:pr-3"/>
          <Image width={265} height={200} src="/home/img-8.png" alt="food" className="pr-20 sm:pr-5 md:pr-32 lg:pr-14"/>
              </div>
            </div>
            </div>
        </div>
      </section>

        {/*3rd Section*/}
        <section>
          <div className="w-full md:w-auto bg-black text-white">
          <div className="pt-16 lg:pt-20 lg:pb-10 lg:px-10 text-center">
            <h2 className="text-orange-500 font-semibold">Food Category</h2>
            <h1 className="font-semibold lg:font-bold lg:text-4xl pt-3 lg:pt-0 pb-5 lg:pb-0">
              <span className="text-orange-500">Ch</span>oose Food Iteam</h1>
            </div>

            
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-5 px-20 lg:px-0">
          
          <Image width={250} height={300} src="/home/img-9.png" alt="food"/>
          <Image width={250} height={200} src="/home/img-10.png" alt="food"/>
          <Image width={250} height={200} src="/home/img-11.png" alt="food"/>
          <Image width={250} height={200} src="/home/img-12.png" alt="food" />
          
        </div>
        </div>
      </section>
      

      {/*4th Section*/}
      <section>
          {/*left Section*/}
          <div className="lg:flex flex-row-reverse gap-1 w-full md:w-auto lg:pt-28 lg:pb-28 bg-black text-white">
          
          <div className="flex-1 pt-14 lg:pt-16 px-10 lg:px-0 lg:pr-10">
            <h2 className="text-orange-500">Why Choose us</h2>
            <h1 className="lg:text-4xl lg:font-bold pt-3 lg:pt-0"><span className="text-orange-500">Ex</span>tra ordinary taste And Experienced</h1>
            <p className="pt-3 lg:pt-5 pb-5 lg:pb-0 text-justify text-xs lg:text-sm pr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptate nam unde vero quae sint? Ab, aliquid debitis, tenetur sed dicta ipsa unde ullam suscipit nihil commodi ut porro repellat!
               </p>
            <ul className="flex gap-5 lg:gap-5 lg:leading-10 lg:pt-10 lg:px-5">
              <li className="bg-[url('/home/img-19.png')] w-14 h-14 bg-no-repeat rounded-sm">
                <Image width={50} height={50} src="/home/img-20.png" alt="tags" />
                <p className="text-center text-xs pt-3 lg:pb-10">Fast Food</p>
              </li>

              <li className="bg-[url('/home/img-21.png')] w-14 h-14 bg-no-repeat rounded-sm">
                <Image width={50} height={50} src="/home/img-22.png" alt="tags" />
                <p className="text-center text-xs pt-3 lg:pb-10">Lunch</p>
              </li>

              <li className="bg-[url('/home/img-23.png')] w-14 h-14 bg-no-repeat rounded-sm">
                <Image width={50} height={50} src="/home/img-24.png" alt="tags"/>
                <p className="text-center text-xs pt-3 lg:pb-10">Dinner</p>
              </li>
             
            </ul>
            <div className="flex pt-10">
             <p className="bg-white text-orange-500 pt-4 lg:pt-2 pb-2 lg:pb-2 pr-5 lg:pr-10 pl-5 lg:pl-10 text-xl lg:text-4xl lg:font-semibold rounded-s-lg">30+</p>
             <p className="bg-white text-black pt-2 lg:pt-3 pb-2 lg:pb-3 px-5 lg:px-5 lg:text-sm rounded-e-xl">Years of<br/><span className="font-bold" >Experienced</span></p>
             
            </div>
               
                </div>
          

            {/*right Section*/}
            <div className="flex-1 pt-10 lg:pt-0 px-10 lg:px-14 pb-20 lg:pb-0">
            <div className="grid grid-cols-2 gap-3 lg:gap-5">
              <Image width={600} height={600} src="/home/img-13.png" alt="food"/>
              <Image width={200} height={250} src="/home/img-10.png" alt="food" className="pt-5 sm:pt-24 lg:pt-10 pr-10 md:pr-5 lg:pr-0"/>
              </div>
              <div className="grid grid-cols-3 gap-2 lg:gap-5 pt-3 lg:pt-5">
                <div>
              <Image width={300} height={300} src="/home/img-15.png" alt="food"/>
              </div>
              <div>
              <Image width={300} height={300} src="/home/img-16.png" alt="food"/>
              </div>
              <div>
              <Image width={100} height={100} src="/home/img-17.png" alt="food"/>
              <Image width={100} height={100} src="/home/img-18.png" alt="food"/>
              </div>
            </div>
          </div>
            </div>
          </section>
          

          {/*4th Section*/}
            <section>
            <div className="bg-[url('/home/bg-3.png')] h-60 lg:h-full bg-no-repeat">
                <div className="bg-[url('/home/bg-3.1.png')] h-full bg-no-repeat">
                 <div className="grid grid-cols-4 gap-10 lg:gap-20 text-white pt-14 lg:pt-32 
                              pb-14 lg:pb-20 px-10 lg:px-40 text-center place-items-center">
                 
                  <div>
                  <Image width={100} height={100} src="/home/img-25.png" alt="food" className="px-5 lg:px-0"/>
                  <p className="text-sm lg:text-lg lg:pt-10 ">Professional Chefs</p>
                  <p className="font-bold text-sm lg:text-xl lg:pt-5 ">420</p>
                  </div>

                  <div>
                  <Image width={100} height={100} src="/home/img-26.png" alt="food" className="px-5 lg:px-0"/>
                  <p className="text-sm md:text-lg lg:pt-10 ">Items of Food</p>
                  <p className="font-bold text-sm lg:text-xl md:pt-5 ">320</p>
                  </div>

                  <div>
                  <Image width={100} height={100} src="/home/img-27.png" alt="food" className="px-5 lg:px-0"/>
                  <p className="text-sm md:text-lg lg:pt-10 ">Years Of Experienced</p>
                  <p className="font-bold text-sm lg:text-xl lg:pt-5 ">30+</p>
                  </div>

                  <div>
                  <Image width={100} height={100} src="/home/img-28.png" alt="food"  className="px-5 lg:px-0"/>
                  <p className="text-sm lg:text-lg lg:pt-10 ">Happy Customers</p>
                  <p className="font-bold text-sm lg:text-xl lg:pt-5 ">220</p>
                  </div>

                  </div>
                </div>
                </div>
            </section>

          {/* 5th section */}
         <section>
         <div className="w-full md:w-auto bg-black text-white pt-5 md:pt-10">
          <div className="text-center pt-5 md:pt-10">
            <p className="text-orange-500">Cheese & Pick</p>
            <h2 className="text-xl md:text-4xl"><span className="text-orange-500">Fr</span>om Our Menu</h2>
          </div>

          <div className="hidden lg:block">
              <ul className="flex lg:gap-3.5 lg:flex-row lg:text-base lg:pt-10 lg:px-7">
                <li>
                <a href="/breakfast" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Breakfast </a>
                  </li>
                <li>
                <a href="/lunch" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Lunch</a>
                </li>
                <li>
                <a href="/dinner" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Dinner</a>
                </li>
                <li>
                  <a href="/dessert" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Dessert</a>
                </li>
                <li>
                <a href="/drink" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Drink</a>
                </li>
                <li>
                <a href="/snack" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Snack</a>
                </li>
                <li>
                <a href="/soups" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Soups</a>
                </li>
              </ul>
              </div>

              <Sheet>
            <SheetTrigger className="lg:hidden px-6">
            <Menu className="bg-orange-500"/>
            </SheetTrigger>
            <SheetContent>
                        <ul className="space-x-5">
                            <li className="flex flex-col space-x-5 text-xl m-5">
                            </li>
                            <li>
                            <Link href="/" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Breakfast </Link>
                            </li>
                            <li>
                            <Link href="/menu" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Lunch </Link>
                            </li>
                            <li>
                            <Link href="/blog" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Dinner </Link>
                            </li>
                            <li>
                              <Link href="/pages" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Dessert </Link>
                            </li>
                            <li>
                            <Link href="/about" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Drink </Link>
                            </li>
                            <li>
                            <Link href="/shop" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Snack </Link>
                            </li>
                            <li>
                            <Link href="/contact" className="block hover:cursor-pointer hover:bg-orange-500 hover:text-white py-2 px-5 rounded-xl"> Soups </Link>
                            </li>
                    </ul>
            </SheetContent>
            </Sheet>



            <div className="lg:flex lg:gap-5 lg:px-5 lg:pt-10">
            <div className="bg-[url('/home/img-29.png')] h-screen bg-no-repeat">
              {/*left section */}
              <div className="flex-1 flex-col">
              <div className="lg:pt-10 lg:pl-10 lg:pb-10 place-items-center">
                  <Image width={400} height={400} src="/home/img-30.png" alt="food"/>
                  </div>    
              </div>          
              </div>
             
              {/*right section */}
              <div className="flex-1 pt-0 lg:pt-10 px-5 md:px-10">
                    <div className="grid grid-cols-2">
    
                        <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-31.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>
                    

                        <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-32.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                        </div>
              
                        <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-33.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>

                          <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-34.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>

                          <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-35.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:-base">12.5$</p>
                                </div>
                          </div>

                          <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-36.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>

                          <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-37.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>

                          <div className="flex pt-3 md:pt-5">
                                <div>
                                <Image width={80} height={80} src="/home/img-38.png" alt="food"/>
                                </div>
                                <div className="px-3 md:px-5">
                                <h3 className="font-bold text-xs lg:text-base">Lettuce Leaf</h3>
                                <p className="text-xs">lacus nisi, et ac dapibus velit in conswquat.</p>
                                <p className="text-orange-500 font-bold text-xs lg:text-base">12.5$</p>
                                </div>
                          </div>
                    
                          </div>

                </div>
            </div>
              </div>
         </section>

      {/* 6th section */}
            <section>
              <div className="w-full md:w-auto bg-black text-white pt-5 md:pt-10">
                <div className="text-center pt-5 md:pt-5">
                  <p className="text-orange-500">Chefs</p>
                  <h2 className="text-xl lg:text-4xl pt-3 lg:pt-0"><span className="text-orange-500">Me</span>et Our Chef</h2>
                </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 pt-5 lg:pt-10 px-10 lg:px-28 place-items-center">
              <Image width={250} height={300} src="/home/img-39.png" alt="food"/>
              <Image width={250} height={300} src="/home/img-40.png" alt="food"/>
              <Image width={250} height={300} src="/home/img-41.png" alt="food"/>
              <Image width={250} height={300} src="/home/img-42.png" alt="food"/>
            </div>
          
              <div className="place-items-center pt-5 md:pt-10 px-28 sm:px-48 lg:px-80 ml-20 md:ml-40">
                <button className="bg-transparent border-2 border-orange-500 rounded-full px-5 md:px-10 pt-2 md:pt-2 pb-2 md:pb-2
                hover:bg-orange-500 hover:text-black">See More</button>
              </div>

                </div>
                </section>


             {/* 6th section */}
             <section>
              <div className="w-full md:w-auto bg-black text-white pt-5 md:pt-10 pb-5 md:pb-10">
                <div className="pt-3 md:pt-5 pl-5 md:pl-20">
                <h2 className="text-orange-500 text-lg">Testimonials</h2>
                <h2 className="text-white text-xl md:text-4xl">What our client are saying</h2>
                </div>

                <div className="pt-5 md:pt-10 px-14 md:px-20 pb-10 lg:pb-0">
                <Avatar className="ml-40 md:ml-72 lg:ml-10 lg:w-20 lg:h-20"><AvatarImage src="https://github.com/shadcn.png"/></Avatar>
                  <p className="text-center font-bold bg-white pt-5 md:pt-10 text-orange-500 text-lg md:text-4xl">99</p>
                  <p className="text-xs md:text-sm text-center bg-white text-black pt-5 md:pt-10 px-5 md:px-10"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis eius nisi temporibus illo corrupti. Provident sit, nesciunt esse tempora rem optio
                     corrupti iusto vitae mollitia neque illum deserunt, natus dignissimos.
                     </p>
                     <p className="text-sm md:text-base font-semibold text-center bg-white text-black pt-5 md:pt-10 px-5 md:px-10"> 
                      Alamin Hasan</p>
                      <p className="text-xs md:text-sm text-center bg-white text-black pt-2 md:pt-3 px-5 md:px-10 pb-5 md:pb-10"> 
                      Food Specilist</p>
                  
                </div>
                </div>
                </section>


        {/*7th Section*/}
      <section>
        <div className="bg-[url('/home/bg-5.png')] h-96 lg:h-full bg-no-repeat">
        
        <div className="lg:pt-24 lg:pb-24 text-center lg:text-right lg:pl-80">
        <p className="text-black lg:text-orange-500 text-base font-semibold lg:font-normal pt-10 lg:pt-0 lg:px-20">resturent active process</p>
        <p className="lg:pl-80 font-semibold text-xl lg:text-4xl lg:px-20 pt-5 lg:pt-10"><span className="lg:text-orange-500">We </span>
        <span className="text-white">Document Every Food Bean Process untile it is saved</span></p>
       <p className="text-white text-center lg:text-right pt-5 lg:pt-10 pl-5 lg:pl-80 px-5 lg:px-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat voluptatem, illum labore quos odio facilis veniam eveniet corrupti tempore aperiam provident repellendus! In non fugiat consequuntur qui id velit!</p>
      
      <button className="bg-transparent border-2 lg:border-orange-500 text-white rounded-full
      hover:text-black hover:bg-orange-500 text-xs lg:text-base
      px-5 lg:px-10 pt-2 lg:pt-2 pb-2 lg:pb-2 mx-20 mt-10">See More</button>
       
              </div>
        </div>
       
        </section>

        {/*8th Section*/}
      <section>
        <div className="pt-20 pb-20 place-items-center bg-black">
          <h3 className="text-orange-500">Blog Post</h3>
          <h2 className="text-white font-bold text-xl lg:text-4xl pt-5">
            <span className="text-orange-500">La</span>test News & Blog</h2>
        

          <div className="lg:flex gap-5">
            <div className="border-2 border-white mt-10 text-justify">
            <Image width={350} height={300} src="/home/img-45.png" alt="food"/>
            <p className="text-orange-500 text-xs pt-5 px-5">10 February 2022</p>
            <p className="text-white text-xs pt-3 px-5 font-semibold">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <p className="flex gap-3 text-white text-xs pt-3 px-5 pb-5">Learn More
            <div className="flex gap-3 pl-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </div>
            </p>
            </div>
        

        <div className="border-2 border-white mt-10 text-justify">
            <Image width={350} height={300} src="/home/img-43.png" alt="food"/>
            <p className="text-orange-500 text-xs pt-5 px-5">10 February 2022</p>
            <p className="text-white text-xs pt-3 px-5 font-semibold">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <p className="flex gap-3 text-white text-xs pt-3 px-5 pb-5">Learn More
            <div className="flex gap-3 pl-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </div>
            </p>
            </div>

            <div className="border-2 border-white mt-10 text-justify">
            <Image width={350} height={300} src="/home/img-44.png" alt="food"/>
            <p className="text-orange-500 text-xs pt-5 px-5">10 February 2022</p>
            <p className="text-white text-xs pt-3 px-5 font-semibold">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            <p className="flex gap-3 text-white text-xs pt-3 px-5 pb-5">Learn More
            <div className="flex gap-3 pl-40">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square-more"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </div>
            </p>
            </div>
            </div>
            

            <div className="lg:flex gap-48 pt-14 lg:pt-20 pb-14 lg:pb-20">
            <div className="text-white">
              <p className="text-xl font-bold">
                <span className="text-orange-500">St</span>ill You Need Our Support?</p>
              <p className="text-sm pt-2 pb-5 lg:pb-0">Don`t wait make a smart & logical quote here. Its pretty easy.</p>
            </div>
            <div className="flex">
              <p className="bg-orange-500 text-white pt-3 pb-3 pr-20 px-3">Enter Your Email</p>
              <p className="bg-white text-orange-500 pt-3 pb-3 px-8">Subscribe Now</p>
            </div>
            </div>

            <hr className="border-1 border-orange-500 px-40 sm:px-44 md:px-52 lg:px-80"/>

            </div>
      </section>

      {/* footer */}
          <section>
            <div className="grid grid-cols-3 lg:grid-cols-4 lg:gap-5 bg-black text-white pt-5 pb-5 px-5 lg:px-10">
                <div className="px-3 lg:px-8">
                  <h2 className="text-lg font-bold">About Us.</h2>
                  <p className="text-xs pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad impedit iste dolorem commodi minima ut cupiditate, nisi ea, unde est modi voluptas? Fuga vitae explicabo dolorem sunt id temporibus.</p>
                  <p className="lg:flex gap-3 pt-3 lg:pt-5 text-xs">
                  <Image width={60} height={20} src="/home/img-46.png" alt="tags" className="pb-3 lg:pb-0 px-3 lg:px-0"/>
                  Opening Houres<br/>Mon-sat(8.00 - 6.00) <br/> Sunday-Closed
                  </p>
                </div>

                <div className="px-7 lg:px-16">
                  <h2 className="text-base font-bold">Useful Links</h2>
                  <ul className="text-xs pt-5 leading-8">
                    <li>About</li>
                    <li>News</li>
                    <li>Partners</li>
                    <li>Team</li>
                    <li>Menu</li>
                    <li>Contacts</li>
                  </ul>
                </div>

                <div className="px-8 lg:px-3">
                  <h2 className="font-bold">Help?</h2>
                  <ul className="text-xs pt-5 leading-8">
                    <li>FAQ</li>
                    <li>Term & Conditions</li>
                    <li>Reporting</li>
                    <li>Documentation</li>
                    <li>Support Policy</li>
                    <li>Privacy</li>
                  </ul>
                </div>

                <div className="pt-10 lg:pt-0 px-5 lg:px-0 lg:pr-5">
                  <h2>Recent Post</h2>

                  <div className="flex lg:block gap-20">
                  <div className="lg:flex gap-5 pt-5">
                    <Image width={50} height={50} src="/home/img-47.png" alt="food"/>
                    <p className="text-gray-400 text-xs">20 Feb 2022<br/>
                      <span className="text-white">Keep Your Bussiness</span></p>
                  </div>

                  <div className="lg:flex gap-5 pt-5">
                    <Image width={50} height={50} src="/home/img-48.png" alt="food"/>
                    <p className="text-gray-400 text-xs">20 Feb 2022<br/>
                      <span className="text-white">Keep Your Bussiness</span></p>
                  </div>

                  <div className="lg:flex gap-5 pt-5">
                    <Image width={50} height={50} src="/home/img-49.png" alt="food"/>
                    <p className="text-gray-400 text-xs">20 Feb 2022<br/>
                      <span className="text-white">Keep Your Bussiness</span></p>
                  </div>
                  </div>

                </div>
            </div>

            <div className="flex justify-between gap-3 bg-orange-500 pt-5 pb-5 px-10 lg:px-24">
              <p className="text-white text-xs lg:text-sm">Copyright @ 2022 by Ayeman. All Rights Reserved.</p>
         
             
              <div className="flex gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook bg-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter bg-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram bg-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube bg-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-fading-plus bg-white"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 8v8"/><path d="M16 12H8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>
              </div>
              </div>
            
          </section>

      </main>
          );
}
