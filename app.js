 //handling the button
        function handleButton() {
                let { ip1, ip2 } = getValue();
                let min = Number(ip1);
                let max = Number(ip2);
                let totalPrimeNumber = countPrimes(min, max);
                displayToUI(1, totalPrimeNumber, min, max)
        }

        //display the data in UI
        function displayToUI(id, totalPrimeNumber, min, max) {

            let disp = document.getElementById("disp");
            disp.innerHTML = '';
            let pTag = document.createElement('p');
            pTag.textContent = totalPrimeNumber;
            disp.appendChild(pTag);

            const tbody = document.getElementById("body");
            const newRow = document.createElement("tr");

            newRow.innerHTML = `
            <td>${id}</td>
            <td>${min}</td>
            <td>${max}</td>
            <td>
                <button class="cancel-btn">Cancel</button>
                <span class="loader"></span>
            </td>`;

            tbody.appendChild(newRow);

            const primesCell = newRow.children[3];
            const cancelBtn = newRow.querySelector(".cancel-btn");

            const timerId = setTimeout(() => {
                primesCell.textContent = totalPrimeNumber;
            }, 3000);


            cancelBtn.addEventListener("click", () => {
                clearTimeout(timerId);
                primesCell.textContent = "Cancelled";
            });
        }

        //reading the input value from UI
        function getValue() {
            let ip1 = document.getElementById("ip1").value;
            let ip2 = document.getElementById("ip2").value;
            return { ip1, ip2 }
        }
