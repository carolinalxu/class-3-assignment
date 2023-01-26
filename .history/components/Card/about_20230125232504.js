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
            borderRadius: "20px",
            width: "400px",
            height: "180px",
            padding: "20px",
          
            fontWeight: "400",
            alignItems: "center",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
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
                borderRadius: "30px",
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