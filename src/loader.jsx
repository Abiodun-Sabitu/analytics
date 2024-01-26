import { Text } from "@chakra-ui/react"

const Loader = () => {
  return (
      <div className="w-full bg-transparent h-full grid place-items-center top-0 absolute">
          <div className="w-full grid place-items-center">

              <Text>Setting the Dashboard for you..</Text> 
               <div className="loader w-10">
         
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path
                    fill="none"
                    stroke="#4c6ef5"
                    strokeWidth="7"
                    strokeLinecap="round"
                    d="M 10,50 A 40,40 0 1,0 90,50 A 40,40 0 1,0 10,50"
                    className="loader-circle"
                    />
                    </svg>
                  </div>
          </div> 
          
          <div className="bottom-10 absolute">
            <span>Powered By <a href="https://geegpay.africa">Geegpay</a> <img className="w-10" src="/logo.png" alt="logo geegpay" /></span>
          </div>

          
            
    </div>
  )
}

export default Loader