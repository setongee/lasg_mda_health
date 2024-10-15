import React from 'react'
import Container from '../../components/container/Container'
import './about.scss'
import Footer from '../../components/footer/footerArea'

export default function Responsibilities() {

  return (
    
        <div className="about__sections">

            <Container>

                 <div className="title">

                    <h1>Roles and Responsibilities: Understanding Core Functions, Duties, and Key Roles</h1>

                    <span>Mandates, duties, and functions assigned to government officials in this ministry.</span>

                </div>
                
                <div className="holder">

                    <div className="mda__head">
                        <div className="mda__info">
                            <div className="lead">Objectives of the Ministry of Health</div>
                            <div className="backups">The Ministry of Health, subject to the provisions of the Health Sector Reform Law (2006), shall be responsible for the formulation, monitoring, and evaluation of policies, strategies, plans of action, and supervision of health services in the State and shall perform the following functions:</div>
                        </div>
                    </div>

                    <div className="mda__content">
                        <p>1. Supervision and control of all health facilities in the State to ensure a minimum standard in all public and private health facilities.</p>

                        <p>2. Supervision and control of all Hospital Boards and Government Health Bodies, Agencies including the Traditional Medicine Board.</p>

                        <p>3. Formulation of regulations and subsidiary legislations for the approval of the Lagos State House of Assembly.</p>

                        <p>4. Approval of long-term plans and variations of such plans.</p>
                        
                        <p>5. Development of management, financial guidelines, and performance standards for internal control of public hospitals.</p>

                        <p>6. Policy approval of rate and scale of charges for services rendered to the public by the Hospital Boards.</p>

                        <p>7. Recommendation for capital and operating budgets for Hospital Boards (which includes recommendations for major adjustments, increases in salaries, allowances, and fringe benefits for hospital employees).</p>

                        <p>8. Elevating the quality of health practice in the professional disciplines through the advancement of appropriate standards and research priorities.</p>

                        <p>9. Collation and analysis of monthly medical statistical data (attendance, morbidity, mortality, and utilization of services) from Hospital Boards.</p>

                        <p>10. Obtaining annual audited accounts of hospitals and Hospital Boards within three months after the end of the preceding financial year which must be submitted to the State Auditor-General’s Office for verification (applicable only to public Hospitals).</p>

                    </div>
                    
                </div>

                {/* <div className="otherLinks">
                    <p>See also : </p>
                    <div className="links__quick">
                        <span> Vision, Mission & Structure </span>
                    </div>
                </div> */}
            </Container>

            <Footer/>
        </div>

  )

}
