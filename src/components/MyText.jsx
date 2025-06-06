import Style from './MyText.module.css'; 
import function MyText() {
    return(
        <div className={Style.text}>
            <h1>MEU PRIMEIRO PROJETO</h1> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fuga itaque suscipit necessitatibus, optio explicabo, 
                maxime quas quasi est ea repellendus,
                repudiandae obcaecati cumque facilis soluta exercitationem quod corrupti tenetur officiis?</p>
        </div>
    )
    
}

export function MyText({ children }) {
  return (
    <div className="text-2xl text-blue-500 font-bold">
      {children}
    </div>
  );
}
