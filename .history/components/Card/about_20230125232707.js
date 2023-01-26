export default function Card ({
    name="none",
    position="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",

}) {
    return (
        <div style={{
            display: "flex",
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            borderRadius: "60px",
            width: "400px",
            height: "180px",
            padding: "20px",
            fontWeight: "400",
            alignItems: "center",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            margin: "10px"
        }}>
           
           
           
        <div style={{

        }}>
            {
                name === "beedeen tran" ? <img src={'icon/brandon.jpeg'} width={"100px"} />:
                name === "brandy tran" ? <img src={'icon/brandon.jpeg'}  width={"100px"} />:
                name === "brandon tran" ? <img src={'icon/brandon.jpeg'} width={"100px"}/>:
                <img src={image}/>
            }
        </div>
        <div style={{
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            padding: "20px",
            display: "flex",

            
        }}>


            <div style={{

                textAlign: "center",
                borderRadius: "60px",
                padding: "10px",
                width: "100%",
                color: "white",
                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            }}>

                
                {name}
            </div>
            <div style={{
                
            }}>
                {position}
            </div>
            
            </div>
        </div>   
)
        }