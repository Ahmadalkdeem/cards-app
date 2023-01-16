import css from './about.module.scss'
import car from './car.png'
function About() {
    return (
        <div className={css.myfdiv}>
            <div className={css.mydiv}>
                <img src={car} alt="car" className={css.myimg} />
                <p className={css.myp}>
                    The Car Allowance Rebate System (CARS), colloquially known as "cash for clunkers", was a $3 billion U.S. federal scrappage program intended to provide economic incentives to U.S. residents to purchase a new, more fuel-efficient vehicle when trading in a less fuel-efficient vehicle. The program was promoted as a post-recession stimulus program to boost auto sales while putting more fuel-efficient vehicles on the roadways.
                </p>
            </div>
        </div>
    )
}

export default About