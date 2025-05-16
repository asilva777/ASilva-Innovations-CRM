AI-Driven SME Perfromance Analytics for Comprenesive Transformation (AIMPACT)

AIMPACT is a data-driven, AI-enhanced analytics platform built for Small and Medium Enterprises (SMEs) in the Philippines. Developed by ASilva Innovations, AIMPACT leverages a Balanced Scorecard (BSC) approach to monitor and improve organizational performance across Financial, Customer, Internal Processes, and Learning & Growth perspectives.

🚀 Features

AI-Powered Performance Analytics

Customizable Dashboards

Real-Time Strategic Insights

Risk Mitigation Models

KPI Tracking Aligned with BSC Framework

🧱 Project Structure

AIMPACT/
├── backend/              # FastAPI backend
├── frontend/             # HTML/CSS/JS frontend
├── .github/workflows/   # GitHub Actions CI/CD
├── docs/                 # Documentation
├── .gitignore
├── README.md
├── LICENSE
└── requirements.txt

💻 Getting Started

Prerequisites

Python 3.11+

pip / pipenv / poetry

Setup (Backend Only)

cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

🔧 Technologies Used

FastAPI – backend API

Chart.js – dashboards

SQLite – starter database (easily replaceable)

GitHub Actions – CI/CD pipeline

📦 Installation

See requirements.txt for full dependency list.

🧪 Running Tests

pytest

🔐 Secrets & Environment

Use .env file for sensitive credentials.

DATABASE_URL=sqlite:///./aimpact.db
API_KEY=your-secret-api-key

🤝 Contributing

Fork this repo

Create a feature branch: git checkout -b feature/new-feature

Commit your changes: git commit -m 'Add new feature'

Push to the branch: git push origin feature/new-feature

Open a Pull Request

📄 License

Licensed under Creative Commons CC BY-NC-SA 4.0.

🔗 Learn More

Visit asilvainnovations.com for more info.

