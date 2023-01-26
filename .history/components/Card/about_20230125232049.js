export default function Card ({
    name="none",
    position="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",
    image="icon/personTwo.png"
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            display: "flex",
            borderRadius: "20px",
            width: "400px",
            height: "180px",
            padding: "50px",
            margin: "20px",
            fontWeight: "700"
            alignItems: "center"
        }}>
           
           
           
        <div style={{
            marginRight: "10px",
            marginLeft: "10px",
            borderRadius:"20px"
        }}>
            {
                name === "beedeen tran" ? <img src={'icon/brandon.jpeg'} width={"100px"} />:
                name === "brandy tran" ? <img src={'icon/brandon.jpeg'}  width={"100px"} />:
                name === "brandon tran" ? <img src={'icon/brandon.jpeg'} width={"100px"}/>:
                <img src={image}/>
            }
        </div>
        <div style={{
        
            borderRadius: "30px",
            padding: "20px",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            
        }}>
            <div style={{
                padding: "10px",
                width: "100%",
                color: "white",
                textAlign: "center",
                borderRadius: "30px"
            }}>

                
                {name}
            </div>
            <div style={{
                padding: "0px",
                textAlign: "left",
                width: "100%"
                
            }}>
                {position}
            </div>
            
            </div>
        </div>   
)
        }