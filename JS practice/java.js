let records = [
    { id: "1", student: "Videep", details: "11-E" , active: true },
    { id: "2", student: "Shri pranav", details: "11-H" , active: false }
];

let nextid = 3;
const list = document.getElementById("record-list");
const form = document.querySelector("form");
let nameInput = document.getElementById("student-id");
let detailInput = document.getElementById("student-details");
const feedback = document.getElementById("feedback");
const summary = document.getElementById("summary");
const ADD = document.getElementById("add");

function Render() {
    list.textContent = "";
    let activeCount = 0;
    
    for (const record of records) {
        if (record.active) {
            activeCount = activeCount + 1;
        }
        const div = document.createElement("div");
        div.className = "record-item";

        const p = document.createElement("p");
        p.textContent = record.student + " --- " + record.details + " - Status: " + (record.active ? "Present" : "Absent");

        const statusButton = document.createElement("button");
        statusButton.textContent = record.active ? "Mark Absent" : "Mark Present";
        statusButton.onclick = () => toggleStatus(record.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteRecord(record.id);

        div.appendChild(p);
        div.appendChild(statusButton);
        div.appendChild(deleteButton);
        list.appendChild(div);
    }

    summary.textContent = "Total students: " + records.length + "   Active: " + activeCount;
}

function toggleStatus(id) {
    const record = records.find(r => r.id === id);
    if (record) {
        record.active = !record.active;
        feedback.style.color = "blue";
        feedback.textContent = `Status updated: "${record.student}" is now ${record.active ? "Present" : "Absent"}.`;
        Render(); 
    }
}

function deleteRecord(id) {
    const recordToDelete = records.find(r => r.id === id);
    const kept = [];
    
    for (const record of records) {
        if (record.id !== id) {
            kept.push(record);
        }
    }
    records = kept; 

    if (recordToDelete) {
        feedback.style.color = "red";
        feedback.textContent = `Deleted: Student "${recordToDelete.student}" (${recordToDelete.details}) was removed from records.`;
    }

    Render(); 
}

function addbuttonn(event) {
    event.preventDefault();
    let name = nameInput.value.trim();
    let detail = detailInput.value.trim();
    if (name === "" || detail === "") {
        feedback.style.color = "red";
        feedback.textContent = "Error: Please enter both student name and class.";
        return;
    }

    records.push({ id: String(nextid), student: name, details: detail, active: false });
    nextid = nextid + 1;

    feedback.style.color = "green";
    feedback.textContent = `Success: Student "${name}" (${detail}) has been saved to the register!`;

    nameInput.value = "";
    detailInput.value = "";

    Render(); 
}

ADD.addEventListener("click", addbuttonn);

Render();