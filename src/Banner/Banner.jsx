


const Banner = () => {
    return (
        <div  className="-mx-12 lg:-mx-36 flex justify-center items-center h-[290px] lg:h-[84vh] " style={
            {
                backgroundImage : `URL("https://resources.biginterview.com/wp-content/uploads/2022/12/The-Top-50-Best-Job-Search-Sites-You-Need-to-Know-About.jpg")` ,
                backgroundRepeat : 'no-repeat',
                backgroundBlendMode : 'color',
                backgroundSize : 'cover'
            }
        }>
            
            

           <div>
           <h2 className="text-center text-[#FFF] text-3xl lg:text-5xl font-Inter font-semibold">YOUR DREAM
BUILD STARTS HERE   </h2>
            <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">Where Automotive Perfection Meets Your Imagination, Drive Beyond Limits</p>

            <div>
                
            </div>

            
            <div className='mt-6 rounded-full lg:mt-10 md:mx-auto flex justify-between bg-[#FFF] border w-[300px] md:w-[300px] lg:w-[470px] border-[#DEDEDE]'>
            <input name='category' id='field-id' className='rounded-l-full pl-4 outline-none ' type="text" placeholder='Search here....' />

            
              <button type="submit" className='bg-[#FF444A] py-3 lg:py-4 px-8 rounded-r-full text-base font-semibold text-[#FFF]'>Search</button>
          </div>


           </div>

           
        </div>
    );
};

export default Banner;

