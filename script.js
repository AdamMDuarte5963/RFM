{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('submit-button').addEventListener('click', async (event) => \{\
    event.preventDefault();\
\
    const specialty = document.getElementById('specialty').value;\
    const insurance = document.getElementById('insurance').value;\
    const clinicalNotes = document.getElementById('clinical-notes').value;\
\
    const patientData = \{\
        specialty: specialty,\
        insurance: insurance,\
        clinical_notes: clinicalNotes,\
    \};\
\
    const response = await fetch('https://FLASKY.adamd5963.repl.co/find_best_providers', \{\
        method: 'POST',\
        headers: \{\
            'Content-Type': 'application/json',\
        \},\
        body: JSON.stringify(patientData),\
    \});\
\
    const bestProviders = await response.json();\
\
    const resultsElement = document.getElementById('results');\
    resultsElement.innerHTML = '';\
\
    bestProviders.forEach((provider) => \{\
        const providerElement = document.createElement('div');\
        providerElement.innerText = `$\{provider.name\} ($\{provider.specialty\}) - Score: $\{provider.score\}`;\
        resultsElement.appendChild(providerElement);\
    \});\
\});\
}
