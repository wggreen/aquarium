/**
 *  TipComponent which renders individual tip objects as HTML
 */
const TipComponent = (tip) => {
    return `
        <div class="tip">
          <h4 class = "tip_title">${tip.title}</h4>
          <p class = "tip_text">${tip.description}</p>
        </div>
    `
}

export default TipComponent