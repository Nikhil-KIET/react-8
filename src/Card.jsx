function Card(props) {
    return (
        <div className=" w-screen flex flex-col items-center  m-3 space-y-5 overflow-hidden ">
            
            <div className="  w-[80%] flex items-center  justify-between h-[480px] bg-[black]  text-white overflow-hidden  m-2 rounded-md">
                <div className=" px-7  flex  flex-col w-[50%]">
                    <div className="flex"> 
                    <img className=" object-contain w-[200px] h-[200px]  " src={props.item.Poster} alt="" />

                    
                    <div className="">
                    <h1 className=" text-3xl font-semibold ">{props.item.Title}</h1>
                    <p  className=" text-xl font-semibold ">{props.item.Year}</p>
                    
                    </div>
                    </div>
                    <div className=" flex flex-col items-start p-3">
                    <p>{props.item.Year}</p>
                <p>{props.item.Type}</p>
                <p> Imdb Id = {props.item.imdbID}</p>
                <p>{props.item.Genre}</p>
                <p>{props.item.Plot}</p>
                <p>{props.item.Writer}</p>
                    </div>
                
                
               

                


                
                
                </div>

                <img className="w-[50%] h-[100%] " src={props.item.Poster} alt="" />
                
               
              
            </div>
            
        </div>
        
        
    );
}

export default Card;
