function generateRollNumbers() {
  const rollCount = document.getElementById("rollCount").value;
  const checkboxList = document.getElementById("checkboxList");
  checkboxList.innerHTML = ""; // Clear existing checkboxes

  for (let i = 1; i <= rollCount; i++) {
    const checkboxItem = document.createElement("div");
    checkboxItem.classList.add("checkbox-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = i;
    checkbox.id = `roll-${i}`;

    const label = document.createElement("label");
    label.textContent = `Roll ${i}`;
    label.setAttribute("for", `roll-${i}`);

    checkboxItem.appendChild(checkbox);
    checkboxItem.appendChild(label);
    checkboxItem.onclick = () => checkbox.click(); // Click anywhere to select checkbox
    checkboxList.appendChild(checkboxItem);
  }
}

function toggleSelectAll(selectAllCheckbox) {
  const checkboxes = document.querySelectorAll("#checkboxList input[type='checkbox']");
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
  });
}

function showAbsentList() {
  const checkboxes = document.querySelectorAll("#checkboxList input[type='checkbox']");
  const absentList = document.getElementById("absentList");
  const absentDate = document.getElementById("absentDate"); // Get the date element
  absentList.innerHTML = ""; // Clear previous list

  // Get the current date
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1; // Months are zero-based
  const year = today.getFullYear();

  // Set the date below the heading
  absentDate.textContent = `Date: ${date}/${month}/${year}`; // Display the date

  checkboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      const listItem = document.createElement("li");
      listItem.textContent = `Roll ${checkbox.value}`; // Display only roll number
      absentList.appendChild(listItem);
    }
  });

  // Hide the checkbox list, generate button, select all, and input field
  document.getElementById("checkboxContainer").style.display = "none";
  document.getElementById("absentListContainer").style.display = "block";
  document.getElementById("rollCount").style.display = "none";
  document.querySelector(".select-all").style.display = "none";
  document.querySelector("button[onclick='generateRollNumbers()']").style.display = "none";
}

function goBack() {
  document.getElementById("checkboxContainer").style.display = "block";
  document.getElementById("absentListContainer").style.display = "none";
  document.getElementById("rollCount").style.display = "block";
  document.querySelector(".select-all").style.display = "flex";
  document.querySelector("button[onclick='generateRollNumbers()']").style.display = "inline-block";
}

function printAbsentList() {
  window.print();
}
