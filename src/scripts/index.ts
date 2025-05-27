import './../styles/style.scss'
import './utils/icons'

document.addEventListener("DOMContentLoaded", function () {
    
    // desplazamiento suave a elemento con id
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click",  (e) => {
            e.preventDefault()
            const targetId = anchor.getAttribute("href").substring(1)
            const targetElement = document.getElementById(targetId)
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" })
            }
        })
    })

})

