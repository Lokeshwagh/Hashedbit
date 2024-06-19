import { useState } from "react"

function Calcultor (){
    const [data , setData] = useState("");
    const getValue =(e)=>{
        setData( data.concat(e.target.value));
    }
    const calcu=()=>{
        setData(eval(data).toString())
    }
    const allClear=()=>{
        setData('');
    }
    const Back=()=>{
        setData(data.slice(0,-1))
    }
return(
    <>
       <div className="w-2/4 h-96 bg-slate-300 m-auto mt-24 ">
        <div className="w-2/4 h-10 bg-red-300 m-auto border-gray-700 rounded-xl mb-8">
        <input placeholder="Calculator" value={data} className="w-full h-10 bg-red-300 m-auto border-gray-700 rounded-xl text-4xl p-6"/></div>
        <div className="bg-orange-200 w-2/4 h-4/5 rounded-2xl m-auto">
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="*" >*</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="/">/</button> 
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={Back}>Back</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={calcu}>=</button>

           <br />
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="7" >7</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="8">8</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="9">9</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={allClear} >Clear</button>
           <br />
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="4">4</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="5">5</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="6">6</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="-">-</button> 
           <br />
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="1">1</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="2">2</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="3">3</button>
           <button className="w-10 h-10 bg-slate-500 caret-emerald-50 rounded-xl gap-12 ml-7 mt-8" onClick={getValue} value="+">+</button>
        
        </div>
       </div>
    </>
)
}
export default Calcultor