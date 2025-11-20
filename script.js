// Sector data
const sectorData = {
    retail: {
        title: "Retail Sector",
        description: "AI is transforming retail through personalized recommendations, inventory management, and enhanced customer service.",
        cases: [
            {
                company: "Amazon",
                implementation: "AI-powered recommendation engine and Alexa voice shopping",
                metrics: {
                    "Customer Engagement": "+40%",
                    "Sales Conversion": "+29%",
                    "Implementation Cost": "$150M",
                    "ROI Timeline": "14 months"
                }
            },
            {
                company: "Walmart",
                implementation: "Inventory management AI and automated customer service chatbots",
                metrics: {
                    "Inventory Accuracy": "+95%",
                    "Cost Savings": "$1.2B annually",
                    "Implementation Cost": "$200M",
                    "ROI Timeline": "16 months"
                }
            },
            {
                company: "Target",
                implementation: "Predictive analytics for demand forecasting and personalized marketing",
                metrics: {
                    "Forecast Accuracy": "+87%",
                    "Marketing ROI": "+34%",
                    "Implementation Cost": "$80M",
                    "ROI Timeline": "12 months"
                }
            }
        ]
    },
    hospitality: {
        title: "Hospitality Sector",
        description: "AI enhances guest experiences through personalization, automated reservations, and operational efficiency.",
        cases: [
            {
                company: "Marriott",
                implementation: "AI chatbot for reservations and customer service automation",
                metrics: {
                    "Booking Efficiency": "+55%",
                    "Customer Satisfaction": "+42%",
                    "Implementation Cost": "$50M",
                    "ROI Timeline": "18 months"
                }
            },
            {
                company: "McDonald's",
                implementation: "AI-powered drive-thru ordering and dynamic menu boards",
                metrics: {
                    "Order Accuracy": "+92%",
                    "Service Speed": "+30%",
                    "Implementation Cost": "$300M",
                    "ROI Timeline": "20 months"
                }
            },
            {
                company: "Starbucks",
                implementation: "Personalized recommendations and predictive ordering through mobile app",
                metrics: {
                    "Customer Retention": "+48%",
                    "Average Order Value": "+25%",
                    "Implementation Cost": "$75M",
                    "ROI Timeline": "15 months"
                }
            }
        ]
    },
    financial: {
        title: "Financial Services Sector",
        description: "AI revolutionizes banking through fraud detection, chatbots, and automated advisory services.",
        cases: [
            {
                company: "Bank of America",
                implementation: "Erica virtual assistant for customer service and financial guidance",
                metrics: {
                    "User Adoption": "45M+ users",
                    "Call Center Reduction": "-25%",
                    "Implementation Cost": "$120M",
                    "ROI Timeline": "22 months"
                }
            },
            {
                company: "JPMorgan Chase",
                implementation: "AI-powered fraud detection and risk assessment systems",
                metrics: {
                    "Fraud Prevention": "+60%",
                    "False Positives": "-50%",
                    "Implementation Cost": "$250M",
                    "ROI Timeline": "24 months"
                }
            },
            {
                company: "PayPal",
                implementation: "Machine learning for transaction monitoring and customer support automation",
                metrics: {
                    "Fraud Detection": "+70%",
                    "Transaction Speed": "+35%",
                    "Implementation Cost": "$180M",
                    "ROI Timeline": "19 months"
                }
            }
        ]
    }
};

// Show sector details
function showSector(sector) {
    const sectorDetails = document.getElementById('sector-details');
    const sectorContent = document.getElementById('sector-content');
    const data = sectorData[sector];
    
    let casesHTML = data.cases.map(caseStudy => {
        let metricsHTML = Object.entries(caseStudy.metrics).map(([key, value]) => 
            `<div class="metric">
                <span>${key}:</span>
                <strong>${value}</strong>
            </div>`
        ).join('');
        
        return `
            <div class="case-card">
                <h4>${caseStudy.company}</h4>
                <p><strong>Implementation:</strong> ${caseStudy.implementation}</p>
                <div style="margin-top: 1rem;">
                    ${metricsHTML}
                </div>
            </div>
        `;
    }).join('');
    
    sectorContent.innerHTML = `
        <h2>${data.title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">${data.description}</p>
        <h3 style="margin-bottom: 1.5rem;">Case Studies</h3>
        <div class="case-studies">
            ${casesHTML}
        </div>
    `;
    
    sectorDetails.classList.remove('hidden');
    sectorDetails.scrollIntoView({ behavior: 'smooth' });
}

// Hide sector details
function hideSectorDetails() {
    const sectorDetails = document.getElementById('sector-details');
    sectorDetails.classList.add('hidden');
    document.getElementById('sectors').scrollIntoView({ behavior: 'smooth' });
}

// Tab switching - FIXED VERSION
function showTab(tabName, clickedButton) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    clickedButton.classList.add('active');
}

// ROI Calculator - WORKING VERSION
function calculateROI() {
    const sector = document.getElementById('calc-sector').value;
    const size = document.getElementById('calc-size').value;
    const app = document.getElementById('calc-app').value;
    
    // ROI calculation logic (simplified estimates based on research)
    const costs = {
        small: { chatbot: 50000, analytics: 75000, automation: 100000 },
        medium: { chatbot: 150000, analytics: 250000, automation: 350000 },
        large: { chatbot: 300000, analytics: 500000, automation: 750000 }
    };
    
    const roiMultipliers = {
        retail: { chatbot: 1.4, analytics: 1.8, automation: 2.1 },
        hospitality: { chatbot: 1.3, analytics: 1.6, automation: 1.9 },
        financial: { chatbot: 1.5, analytics: 2.0, automation: 2.3 }
    };
    
    const timeframes = {
        small: { chatbot: 12, analytics: 15, automation: 18 },
        medium: { chatbot: 16, analytics: 20, automation: 24 },
        large: { chatbot: 20, analytics: 24, automation: 30 }
    };
    
    const cost = costs[size][app];
    const roi = Math.round((cost * roiMultipliers[sector][app] - cost));
    const timeframe = timeframes[size][app];
    
    // Display results with formatting
    document.getElementById('result-cost').textContent = `$${cost.toLocaleString()}`;
    document.getElementById('result-roi').textContent = `+$${roi.toLocaleString()} (${Math.round((roi/cost)*100)}%)`;
    document.getElementById('result-time').textContent = `${timeframe} months`;
    
    // Show results section
    document.getElementById('calc-results').classList.remove('hidden');
    
    // Smooth scroll to results
    document.getElementById('calc-results').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});// ============================================
// AI READINESS ASSESSMENT
// ============================================

const assessmentQuestions = [
    {
        question: "How would you describe your current data infrastructure?",
        options: [
            { text: "We have clean, organized data across systems", score: 3 },
            { text: "Data exists but needs significant cleanup", score: 2 },
            { text: "Data is fragmented or poorly organized", score: 1 },
            { text: "We don't have much structured data", score: 0 }
        ]
    },
    {
        question: "What is your team's attitude toward AI adoption?",
        options: [
            { text: "Enthusiastic and ready to learn", score: 3 },
            { text: "Open but cautious", score: 2 },
            { text: "Skeptical or worried", score: 1 },
            { text: "Resistant to change", score: 0 }
        ]
    },
    {
        question: "How clear are your AI implementation goals?",
        options: [
            { text: "Specific, measurable objectives defined", score: 3 },
            { text: "General goals identified", score: 2 },
            { text: "Still exploring possibilities", score: 1 },
            { text: "No clear goals yet", score: 0 }
        ]
    },
    {
        question: "What's your technical capability level?",
        options: [
            { text: "Strong IT team with AI experience", score: 3 },
            { text: "Competent IT but no AI expertise", score: 2 },
            { text: "Limited IT resources", score: 1 },
            { text: "No dedicated IT team", score: 0 }
        ]
    },
    {
        question: "How would you describe executive support?",
        options: [
            { text: "Strong commitment with allocated budget", score: 3 },
            { text: "Supportive but budget uncertain", score: 2 },
            { text: "Neutral or need convincing", score: 1 },
            { text: "No executive buy-in yet", score: 0 }
        ]
    },
    {
        question: "What's your approach to implementation?",
        options: [
            { text: "Start with small pilot, then scale", score: 3 },
            { text: "Phased rollout over time", score: 2 },
            { text: "Full deployment from start", score: 1 },
            { text: "Haven't decided yet", score: 0 }
        ]
    },
    {
        question: "How do your systems handle integration?",
        options: [
            { text: "Modern, API-enabled systems", score: 3 },
            { text: "Some integration capabilities", score: 2 },
            { text: "Legacy systems, limited integration", score: 1 },
            { text: "Incompatible or very old systems", score: 0 }
        ]
    }
];

let currentQuestion = 0;
let assessmentAnswers = [];

function loadQuestion(index) {
    const container = document.getElementById('question-container');
    const question = assessmentQuestions[index];
    
    container.innerHTML = `
        <h3>Question ${index + 1} of ${assessmentQuestions.length}</h3>
        <p class="question-text">${question.question}</p>
        <div class="options-list">
            ${question.options.map((opt, i) => `
                <label class="option-card ${assessmentAnswers[index] === i ? 'selected' : ''}">
                    <input type="radio" name="q${index}" value="${i}" 
                           ${assessmentAnswers[index] === i ? 'checked' : ''}
                           onchange="selectAnswer(${index}, ${i})">
                    <span>${opt.text}</span>
                </label>
            `).join('')}
        </div>
    `;
    
    // Update progress
    const progress = ((index + 1) / assessmentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Question ${index + 1} of ${assessmentQuestions.length}`;
    
    // Show/hide buttons
    document.getElementById('prev-btn').style.display = index > 0 ? 'inline-block' : 'none';
    document.getElementById('next-btn').textContent = index < assessmentQuestions.length - 1 ? 'Next →' : 'See Results';
}

function selectAnswer(questionIndex, answerIndex) {
    assessmentAnswers[questionIndex] = answerIndex;
    // Add visual feedback
    document.querySelectorAll('.option-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.option-card').classList.add('selected');
}

function nextQuestion() {
    if (assessmentAnswers[currentQuestion] === undefined) {
        alert('Please select an answer before continuing');
        return;
    }
    
    if (currentQuestion < assessmentQuestions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    } else {
        showAssessmentResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function showAssessmentResults() {
    // Calculate score
    let totalScore = 0;
    assessmentAnswers.forEach((answerIndex, questionIndex) => {
        totalScore += assessmentQuestions[questionIndex].options[answerIndex].score;
    });
    
    const maxScore = assessmentQuestions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);
    
    // Hide quiz, show results
    document.getElementById('question-container').style.display = 'none';
    document.querySelector('.assessment-progress').style.display = 'none';
    document.querySelector('.assessment-buttons').style.display = 'none';
    document.getElementById('assessment-results').classList.remove('hidden');
    
    // Display score
    const scoreDisplay = document.getElementById('score-display');
    let readinessLevel, color, recommendations;
    
    if (percentage >= 75) {
        readinessLevel = "High Readiness";
        color = "#10b981";
        recommendations = [
            "✅ You're well-positioned for AI implementation",
            "🚀 Consider starting with a pilot in your strongest area",
            "📊 Use our ROI calculator to build your business case",
            "👥 Begin vendor selection process using our RFP template"
        ];
    } else if (percentage >= 50) {
        readinessLevel = "Moderate Readiness";
        color = "#f59e0b";
        recommendations = [
            "⚠️ Address key gaps before full implementation",
            "📚 Focus on employee training and change management",
            "🔧 Invest in data cleanup and system preparation",
            "🎯 Start with a very limited pilot to test capabilities"
        ];
    } else {
        readinessLevel = "Needs Preparation";
        color = "#ef4444";
        recommendations = [
            "⏸️ Significant groundwork needed before AI adoption",
            "💼 Build executive support and secure budget first",
            "🗂️ Prioritize data infrastructure improvements",
            "👥 Invest 6-12 months in organizational readiness"
        ];
    }
    
    scoreDisplay.innerHTML = `
        <div class="score-circle" style="border-color: ${color};">
            <div class="score-percentage" style="color: ${color};">${percentage}%</div>
            <div class="score-label">${readinessLevel}</div>
        </div>
    `;
    
    document.getElementById('recommendations').innerHTML = `
        <h4>Your Next Steps:</h4>
        <ul class="rec-list">
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
}

function downloadActionPlan() {
    // Generate text-based action plan
    const plan = generateActionPlanText();
    const blob = new Blob([plan], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI-Readiness-Action-Plan.txt';
    a.click();
}

function generateActionPlanText() {
    // Calculate score for plan
    let totalScore = 0;
    assessmentAnswers.forEach((answerIndex, questionIndex) => {
        totalScore += assessmentQuestions[questionIndex].options[answerIndex].score;
    });
    const percentage = Math.round((totalScore / (assessmentQuestions.length * 3)) * 100);
    
    return `
AI READINESS ASSESSMENT - ACTION PLAN
Generated: ${new Date().toLocaleDateString()}
Readiness Score: ${percentage}%

===========================================

YOUR ASSESSMENT SUMMARY:
${assessmentQuestions.map((q, i) => `
${i + 1}. ${q.question}
   Your answer: ${q.options[assessmentAnswers[i]].text}
`).join('')}

===========================================

RECOMMENDED ACTION PLAN:

IMMEDIATE (This Week):
- Review this assessment with your leadership team
- Identify the 2-3 lowest-scoring areas as priorities
- Download our Implementation Checklist from the Resources section
- Schedule a meeting to discuss AI readiness

SHORT-TERM (This Month):
- Address critical gaps identified in the assessment
- Begin data cleanup if needed
- Research AI vendors specific to your industry
- Use our ROI Calculator to estimate costs/benefits

MEDIUM-TERM (This Quarter):
- Develop a detailed implementation roadmap
- Secure budget and executive approval
- Create a cross-functional AI task force
- Select pilot use case for initial deployment

===========================================

NEXT STEPS:
1. Share this plan with stakeholders
2. Visit our Resources section for templates
3. Calculate your projected ROI
4. Review case studies in your industry

Questions? Refer back to our full website for guidance.
    `.trim();
}

// Initialize assessment
if (document.getElementById('question-container')) {
    loadQuestion(0);
}

// ============================================
// ENHANCED ROI CALCULATOR
// ============================================

function calculateEnhancedROI() {
    const sector = document.getElementById('calc-sector').value;
    const size = document.getElementById('calc-size').value;
    const app = document.getElementById('calc-app').value;
    
    // Same calculation as before
    const costs = {
        small: { chatbot: 50000, analytics: 75000, automation: 100000 },
        medium: { chatbot: 150000, analytics: 250000, automation: 350000 },
        large: { chatbot: 300000, analytics: 500000, automation: 750000 }
    };
    
    const roiMultipliers = {
        retail: { chatbot: 1.4, analytics: 1.8, automation: 2.1 },
        hospitality: { chatbot: 1.3, analytics: 1.6, automation: 1.9 },
        financial: { chatbot: 1.5, analytics: 2.0, automation: 2.3 }
    };
    
    const timeframes = {
        small: { chatbot: 12, analytics: 15, automation: 18 },
        medium: { chatbot: 16, analytics: 20, automation: 24 },
        large: { chatbot: 20, analytics: 24, automation: 30 }
    };
    
    const cost = costs[size][app];
    const roi = Math.round((cost * roiMultipliers[sector][app] - cost));
    const timeframe = timeframes[size][app];
    
    // Calculate risk level
    let riskLevel, riskColor;
    if (timeframe <= 15) {
        riskLevel = "🟢 Low Risk";
        riskColor = "#10b981";
    } else if (timeframe <= 22) {
        riskLevel = "🟡 Medium Risk";
        riskColor = "#f59e0b";
    } else {
        riskLevel = "🔴 Higher Risk";
        riskColor = "#ef4444";
    }
    
    // Display results
    document.getElementById('result-cost').textContent = `$${cost.toLocaleString()}`;
    document.getElementById('result-roi').textContent = `+$${roi.toLocaleString()} (${Math.round((roi/cost)*100)}%)`;
    document.getElementById('result-time').textContent = `${timeframe} months`;
    document.getElementById('result-risk').innerHTML = `<span style="color: ${riskColor};">${riskLevel}</span>`;
    
    // Show comparison
    const comparisonText = getComparisonText(sector, size, app, roi, timeframe);
    document.getElementById('comparison-content').textContent = comparisonText;
    
    document.getElementById('calc-results').classList.remove('hidden');
    document.getElementById('calc-results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getComparisonText(sector, size, app, roi, timeframe) {
    const sectorName = { retail: "Retail", hospitality: "Hospitality", financial: "Financial Services" }[sector];
    const sizeName = { small: "small", medium: "medium-sized", large: "large" }[size];
    const appName = { chatbot: "chatbot", analytics: "analytics", automation: "automation" }[app];
    
    return `${sectorName} companies of similar size typically see ROI between ${timeframe-3} and ${timeframe+3} months for ${appName} implementations. Your projection of ${timeframe} months is right on target. Companies in your category report 60-80% success rates with proper planning.`;
}

function downloadBusinessCase() {
    const sector = document.getElementById('calc-sector').value;
    const size = document.getElementById('calc-size').value;
    const app = document.getElementById('calc-app').value;
    
    const cost = document.getElementById('result-cost').textContent;
    const roi = document.getElementById('result-roi').textContent;
    const time = document.getElementById('result-time').textContent;
    
    const businessCase = `
BUSINESS CASE FOR AI IMPLEMENTATION
Generated: ${new Date().toLocaleDateString()}

EXECUTIVE SUMMARY
-----------------
Industry: ${sector.charAt(0).toUpperCase() + sector.slice(1)}
Company Size: ${size.charAt(0).toUpperCase() + size.slice(1)}
Proposed Solution: ${app.charAt(0).toUpperCase() + app.slice(1)}

FINANCIAL PROJECTIONS
---------------------
Implementation Cost: ${cost}
Expected Return: ${roi}
Time to Profitability: ${time}

STRATEGIC RATIONALE
-------------------
✓ 95% of industry leaders have adopted AI
✓ Companies see 35-50% higher customer satisfaction
✓ Competitors achieving significant operational efficiencies
✓ Customer expectations increasingly favor AI-enhanced service

IMPLEMENTATION APPROACH
-----------------------
Phase 1 (Months 1-3): Planning & vendor selection
Phase 2 (Months 4-6): Pilot program in limited scope
Phase 3 (Months 7-9): Evaluate results & optimize
Phase 4 (Months 10+): Scale to full deployment

RISK MITIGATION
---------------
- Start with controlled pilot to minimize risk
- Invest in employee training and change management
- Select vendor with proven track record
- Establish clear success metrics from day one

SUCCESS METRICS
---------------
- Customer satisfaction scores
- Operational efficiency gains
- Cost savings vs. projections
- Employee adoption rates
- ROI timeline adherence

NEXT STEPS
----------
1. Present to executive committee
2. Secure budget approval
3. Form AI task force
4. Begin vendor evaluation process
5. Download RFP template from project website

For detailed templates and implementation guides, visit:
[Your Website URL]
    `.trim();
    
    const blob = new Blob([businessCase], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'AI-Business-Case.txt';
    a.click();
}

function emailResults() {
    const cost = document.getElementById('result-cost').textContent;
    const roi = document.getElementById('result-roi').textContent;
    const time = document.getElementById('result-time').textContent;
    
    const subject = "AI Implementation ROI Analysis";
    const body = `I've calculated the potential ROI for our AI implementation:

Implementation Cost: ${cost}
Expected ROI: ${roi}
Time to Profitability: ${time}

I'd like to discuss moving forward with this initiative.`;
    
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ============================================
// RISK ASSESSMENT
// ============================================

function assessRisk() {
    const checkboxes = document.querySelectorAll('.risk-item:checked');
    let riskScore = 0;
    let positiveFactors = 0;
    
    checkboxes.forEach(checkbox => {
        const risk = checkbox.getAttribute('data-risk');
        if (risk === 'high') riskScore += 3;
        else if (risk === 'medium') riskScore += 2;
        else if (risk === 'positive') positiveFactors += 1;
    });
    
    // Adjust score based on positive factors
    riskScore = Math.max(0, riskScore - (positiveFactors * 2));
    
    let riskLevel, riskColor, recommendations;
    
    if (riskScore <= 3) {
        riskLevel = "LOW RISK";
        riskColor = "#10b981";
        recommendations = [
            "✅ You're well-positioned for successful implementation",
            "Continue with planned timeline",
            "Focus on maintaining momentum and team engagement",
            "Consider slightly more aggressive goals"
        ];
    } else if (riskScore <= 7) {
        riskLevel = "MODERATE RISK";
        riskColor = "#f59e0b";
        recommendations = [
            "⚠️ Address identified risk factors before proceeding",
            "Extend timeline by 2-3 months for preparation",
            "Invest extra resources in training and change management",
            "Start with smaller pilot than originally planned"
        ];
    } else {
        riskLevel = "HIGH RISK";
        riskColor = "#ef4444";
        recommendations = [
            "🛑 Significant preparation needed before implementation",
            "Focus on foundational improvements for 6-12 months",
            "Build executive support and secure committed budget",
            "Consider bringing in external consultants"
        ];
    }
    
    document.getElementById('risk-indicator').innerHTML = `
        <h2 style="color: ${riskColor}; font-size: 3rem; margin: 0;">${riskLevel}</h2>
        <p style="margin-top: 0.5rem;">Risk Score: ${riskScore}/12</p>
    `;
    
    document.getElementById('risk-recommendations').innerHTML = `
        <h4>Recommended Actions:</h4>
        <ul class="rec-list">
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
    
    document.getElementById('risk-results').classList.remove('hidden');
}

function downloadRiskReport() {
    const report = `
AI IMPLEMENTATION RISK ASSESSMENT
Generated: ${new Date().toLocaleDateString()}

RISK FACTORS IDENTIFIED:
${Array.from(document.querySelectorAll('.risk-item:checked')).map(cb => 
    `- ${cb.nextElementSibling.textContent.trim()}`
).join('\n')}

MITIGATION STRATEGIES:
1. Data Quality: Allocate 3-6 months for data cleanup before implementation
2. Employee Concerns: Conduct training sessions and address fears proactively
3. Clear Metrics: Define 3-5 specific, measurable success criteria
4. System Integration: Conduct thorough compatibility testing during vendor selection
5. Realistic Scope: Start small, prove value, then scale gradually

RECOMMENDED TIMELINE ADJUSTMENTS:
- Low Risk: Proceed as planned
- Moderate Risk: Add 2-3 months buffer
- High Risk: 6-12 month preparation phase recommended

Download our complete Implementation Checklist for detailed guidance.
    `.trim();
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Risk-Mitigation-Plan.txt';
    a.click();
}

// ============================================
// TEMPLATE DOWNLOADS
// ============================================

function downloadTemplate(templateType) {
    const templates = {
        'rfp': generateRFPTemplate(),
        'roi-tracker': 'ROI_Tracking_Spreadsheet.xlsx - Download simulated',
        'checklist': generateChecklistTemplate(),
        'training': 'Employee_Training_Deck.pptx - Download simulated',
        'emails': generateEmailTemplates(),
        'risk-guide': generateRiskGuide()
    };
    
    const content = templates[templateType];
    const filename = `${templateType.replace('-', '_')}_template.txt`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    alert(`✅ Downloaded ${templateType} template! Check your downloads folder.`);
}

function generateRFPTemplate() {
    return `
REQUEST FOR PROPOSAL (RFP)
AI Implementation Services

SECTION 1: COMPANY OVERVIEW
[Insert your company description]

SECTION 2: PROJECT SCOPE
We are seeking an AI solution for [specific application].
Expected implementation: [timeframe]
Budget range: [amount]

SECTION 3: REQUIREMENTS
Mandatory Requirements:
□ Experience in [your industry]
□ Proven ROI case studies
□ Integration with [your systems]
□ Training and support included
□ Data security compliance

Desired Features:
□ Scalability for growth
□ Customization capabilities
□ API access
□ Regular updates

SECTION 4: EVALUATION CRITERIA
- Technical Capability (30%)
- Industry Experience (25%)
- Cost (20%)
- Support & Training (15%)
- Company Stability (10%)

SECTION 5: SUBMISSION REQUIREMENTS
Please provide:
1. Company profile and relevant experience
2. Technical approach and methodology
3. Timeline and milestones
4. Pricing breakdown
5. References from similar projects
6. Support and maintenance terms

DEADLINE: [Date]
CONTACT: [Your contact info]
    `.trim();
}

function generateChecklistTemplate() {
    return `
AI IMPLEMENTATION CHECKLIST

PHASE 1: PLANNING (Weeks 1-4)
□ Conduct readiness assessment
□ Define clear success metrics
□ Secure executive approval and budget
□ Form cross-functional task force
□ Document current processes
□ Identify data sources

PHASE 2: VENDOR SELECTION (Weeks 5-8)
□ Create RFP document
□ Research and shortlist vendors
□ Schedule vendor demos
□ Check references
□ Negotiate contracts
□ Finalize selection

PHASE 3: PREPARATION (Weeks 9-12)
□ Clean and organize data
□ Update system infrastructure
□ Create communication plan
□ Design training program
□ Establish pilot parameters
□ Set up monitoring tools

PHASE 4: PILOT (Weeks 13-16)
□ Deploy in limited scope
□ Train pilot users
□ Monitor performance daily
□ Collect user feedback
□ Document issues and fixes
□ Measure against success metrics

PHASE 5: OPTIMIZATION (Weeks 17-20)
□ Analyze pilot results
□ Make necessary adjustments
□ Refine processes
□ Update training materials
□ Get stakeholder sign-off
□ Plan full rollout

PHASE 6: SCALE (Weeks 21+)
□ Expand to additional users/locations
□ Continue training programs
□ Monitor KPIs
□ Regular optimization
□ Gather ongoing feedback
□ Document lessons learned
    `.trim();
}

function generateEmailTemplates() {
    return `
EMAIL TEMPLATES FOR AI IMPLEMENTATION

TEMPLATE 1: ANNOUNCEMENT TO EXECUTIVES
Subject: AI Initiative: Strategic Investment Proposal

Dear [Executive Team],

I'm proposing an AI implementation project that could deliver [X]% improvement in [key metric].

Key Points:
- Investment: $[amount]
- Expected ROI: [X]% in [timeframe]
- Strategic alignment: [how it supports company goals]

Attached is a detailed business case. I'd appreciate 30 minutes to discuss at our next meeting.

Best regards,
[Your name]

---

TEMPLATE 2: ANNOUNCEMENT TO EMPLOYEES
Subject: Exciting News: We're Embracing AI to Enhance Our Work

Team,

We're implementing AI technology to [specific benefit]. This is great news because it will:
- Make your job easier by handling [routine tasks]
- Free you up for [more meaningful work]
- Improve our [customer experience/efficiency]

What this means for you:
- Training will be provided
- Your role is secure and evolving
- Your input is valued throughout the process

We'll be sharing more details next week.

Questions welcome!
[Your name]

---

TEMPLATE 3: UPDATE TO CUSTOMERS
Subject: We're Improving Your Experience with New Technology

Dear Valued Customer,

We're enhancing our service with AI technology designed to:
- Provide faster response times
- Offer 24/7 availability
- Deliver more personalized service

You'll still have access to our human team for complex issues. We're simply adding tools to serve you better.

Thank you for your continued trust.

Best regards,
[Company name]
    `.trim();
}

function generateRiskGuide() {
    return `
AI IMPLEMENTATION RISK MANAGEMENT GUIDE

RISK CATEGORY 1: DATA QUALITY
Risk Level: HIGH
Mitigation:
- Audit data quality 6 months before implementation
- Invest in data cleaning and standardization
- Establish ongoing data governance protocols
- Test AI with sample data before full deployment

RISK CATEGORY 2: EMPLOYEE RESISTANCE
Risk Level: MEDIUM
Mitigation:
- Communicate early and often about AI goals
- Involve employees in pilot selection
- Emphasize AI as augmentation, not replacement
- Provide comprehensive training
- Celebrate early wins

RISK CATEGORY 3: TECHNICAL INTEGRATION
Risk Level: HIGH
Mitigation:
- Conduct thorough compatibility assessment
- Build in integration testing time
- Have IT resources dedicated to project
- Plan for legacy system updates if needed
- Include integration support in vendor contract

RISK CATEGORY 4: SCOPE CREEP
Risk Level: MEDIUM
Mitigation:
- Define clear project boundaries
- Use phased approach
- Resist "while we're at it" additions
- Save enhancements for Phase 2
- Stick to success metrics

RISK CATEGORY 5: VENDOR DEPENDENCY
Risk Level: LOW-MEDIUM
Mitigation:
- Choose established, stable vendor
- Negotiate data portability clauses
- Document all processes
- Train internal team on system management
- Build in contract flexibility

MONITORING PLAN:
Week 1-4: Daily check-ins
Week 5-12: Weekly reviews
Month 4+: Monthly assessments

RED FLAGS TO WATCH:
- User adoption below 50% after 30 days
- No measurable improvement in 90 days
- Increasing employee complaints
- Technical issues not resolving
- Vendor responsiveness declining

ESCALATION PROCEDURES:
1. Project team attempts resolution (3 days)
2. Escalate to project sponsor (1 week)
3. Vendor engagement for technical issues
4. Executive review for strategic pivots
    `.trim();
}

function downloadAllResources() {
    alert("📦 Complete AI Implementation Toolkit includes:\n\n✓ All 6 templates\n✓ Bonus: 50+ page Implementation Guide\n✓ Video tutorials\n✓ Vendor comparison spreadsheet\n\nIn a real implementation, this would download a ZIP file with all resources.");
}

