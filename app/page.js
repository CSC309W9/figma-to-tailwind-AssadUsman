// UTORID: usmanass


// // app/page.js
// export default function Home() {
//   return (
//     <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
//       <div className="w-[150px] h-[52px] left-[1567px] top-[58px] absolute">
//         <div className="w-[150px] h-[52px] left-0 top-0 absolute bg-[#eaecd7] rounded-[49px]" />
//         <div className="left-[50px] top-3 absolute justify-start text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Recipe</div>
//       </div>
//       <div className="origin-top-left  w-[543px] h-[590.40px] left-[1068.69px] top-[256px] absolute">
//         <img className="w-[800.99px] h-[600.71px] left-[10.51px] top-[-20.62px] absolute" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/800px-Roasted_coffee_beans.jpg" />
//       </div>
//       <div className="w-[680px] left-[143px] top-[313px] absolute justify-start text-[#eaecd7] text-[110px] font-black font-['Inknut_Antiqua'] leading-[134.20px]">Starbucks, but better</div>
//       <div className="w-[680px] left-[148px] top-[740px] absolute justify-start text-[#eaecd7] text-[40px] font-semibold font-['Inknut_Antiqua'] leading-[48.80px]">Introducing Synthesized Coffee</div>
//       <div className="left-[270px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Careers</div>
//       <div className="left-[64px] top-[46px] absolute justify-start text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</div>
//       <div className="w-[1804px] h-[102px] left-[-35px] top-[1049px] absolute bg-white" />
//       <div className="left-[124px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Contact</div>
//       <div className="left-[794px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Company Policy</div>
//       <div className="left-[1464px] top-[1063px] absolute justify-start text-[#db4439] text-2xl font-black font-['Inknut_Antiqua'] leading-[29.28px]">Careers</div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute right-10 top-10 flex items-center space-x-6">
        <div className="w-[150px] h-[52px] bg-[#eaecd7] rounded-[49px] flex justify-center items-center">
          <span className="text-[#db4439] text-base font-black font-['Inknut_Antiqua']">Recipe</span>
        </div>
        <span className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Careers</span>
        <span className="text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">Home</span>
      </div>

      {/* Image */}
      <div className="absolute w-[50%] h-auto right-10 top-[20%]">
        <img
          className="w-full h-auto object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/800px-Roasted_coffee_beans.jpg"
          alt="Coffee Beans"
        />
      </div>

      {/* Text Content */}
      <div className="absolute left-10 top-[30%] w-[40%] text-[#eaecd7]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-['Inknut_Antiqua'] leading-tight">
          Starbucks, but better
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-semibold font-['Inknut_Antiqua'] leading-relaxed">
          Introducing Synthesized Coffee
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full bg-white py-4 flex justify-around">
        <span className="text-[#db4439] text-lg md:text-2xl font-black font-['Inknut_Antiqua']">Contact</span>
        <span className="text-[#db4439] text-lg md:text-2xl font-black font-['Inknut_Antiqua']">Company Policy</span>
        <span className="text-[#db4439] text-lg md:text-2xl font-black font-['Inknut_Antiqua']">Careers</span>
      </div>
    </div>
  );
}
