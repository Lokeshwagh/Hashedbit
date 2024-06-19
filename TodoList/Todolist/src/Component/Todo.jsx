import { useState } from "react"
import React from "react";
import "./Todo.css"
import { AuthErrorCodes } from "firebase/auth";

export default function Todo(){
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const addTask=(e)=>{
          if(task){
            const newTask={id:new Date().getTime().toString() ,title: task}
            setTasks([...tasks,newTask]);
            localStorage.setItem("localTasks",JSON.stringify([...tasks,newTask]));
            setTask("")
          }
    }
    const DeleteTask=(task)=>{
          const deleted = tasks.filter((t)=>t.id!==task.id);
          setTasks(deleted);
          localStorage.setItem("localTasks",JSON.stringify(deleted));
    }
    const ClearAll=()=>{
        setTasks([]);
        localStorage.removeItem("localTasks")
    }
    

    return(
        <>
           <div className="Main">
                <div className="inputdiv">  
                    <input type="text" name="task"  
                    placeholder="Write You Want " 
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}/>
                  <button  onClick={addTask}>+</button>
                </div>
                <div className="taskDiv">
                    <center>
                        <p style={{margin:"auto"}}>You have { !tasks.length? "no task":tasks.length===1? "1 Tasks":tasks.length>0?`${tasks.length} task`:null}</p>
                    </center>
                       
                </div>
                    {/* Div for the Task */}
                    <div >  
                        {tasks.map((task)=>(
                            
                                 <React.Fragment key={task.id}>
                                <div className="values">
                                                <span>
                                                    {task.title} 
                                               </span>
                                 
                                </div>
                            <div>
                                <button onClick={()=>DeleteTask(task)} style={{color:"white", background:"black" ,border:"2px solid black",}}><span class="material-symbols-outlined">delete_forever</span></button>
                            </div>
                            </React.Fragment>))}
                    </div>
                    <div>
                    <center><button className="clear" onClick={()=>ClearAll()}>Clear All</button></center>
                    </div>
                </div>

                

        </>
    )
    
};
