export default function Card({
    degree ="none",
    color = "purple",
    font="0",
    image="icon/personTwo.png"
}) {
    return(
        <div style={{
            display: "flex",
            backgroundColor: color, 
            fontSize: "20px",
            borderRadius: "10px",
            padding: "15px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        

            
            
            
            }}>
            {
                color==="#F7B2B7" ?     <img src={'icon/businessicon.png'} width='50' /> :
                color==="#DE639A" ?    <img src={'icon/computericon.png'} width='50' /> :
                                    <img src={image} width='50' />
                



            }
            {degree}
        </div>

    )
}