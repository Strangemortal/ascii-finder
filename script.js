const asciiTable = [
    [0, '00', 'NUL (null)'], [1, '01', 'SOH (start of heading)'], [2, '02', 'STX (start of text)'], [3, '03', 'ETX (end of text)'],
    [4, '04', 'EOT (end of transmission)'], [5, '05', 'ENQ (enquiry)'], [6, '06', 'ACK (acknowledge)'], [7, '07', 'BEL (bell)'],
    [8, '08', 'BS (backspace)'], [9, '09', 'TAB (horizontal tab)'], [10, '0A', 'LF (line feed)'], [11, '0B', 'VT (vertical tab)'],
    [12, '0C', 'FF (form feed)'], [13, '0D', 'CR (carriage return)'], [14, '0E', 'SO (shift out)'], [15, '0F', 'SI (shift in)'],
    [16, '10', 'DLE (data link escape)'], [17, '11', 'DC1 (device control 1)'], [18, '12', 'DC2 (device control 2)'],
    [19, '13', 'DC3 (device control 3)'], [20, '14', 'DC4 (device control 4)'], [21, '15', 'NAK (negative acknowledge)'],
    [22, '16', 'SYN (synchronous idle)'], [23, '17', 'ETB (end of transmission block)'], [24, '18', 'CAN (cancel)'],
    [25, '19', 'EM (end of medium)'], [26, '1A', 'SUB (substitute)'], [27, '1B', 'ESC (escape)'], [28, '1C', 'FS (file separator)'],
    [29, '1D', 'GS (group separator)'], [30, '1E', 'RS (record separator)'], [31, '1F', 'US (unit separator)'],
    [32, '20', '(space)'], [33, '21', '!'], [34, '22', '"'], [35, '23', '#'], [36, '24', '$'], [37, '25', '%'], [38, '26', '&'],
    [39, '27', '\''], [40, '28', '('], [41, '29', ')'], [42, '2A', '*'], [43, '2B', '+'], [44, '2C', ','], [45, '2D', '-'],
    [46, '2E', '.'], [47, '2F', '/'], [48, '30', '0'], [49, '31', '1'], [50, '32', '2'], [51, '33', '3'], [52, '34', '4'],
    [53, '35', '5'], [54, '36', '6'], [55, '37', '7'], [56, '38', '8'], [57, '39', '9'], [58, '3A', ':'], [59, '3B', ';'],
    [60, '3C', '<'], [61, '3D', '='], [62, '3E', '>'], [63, '3F', '?'], [64, '40', '@'], [65, '41', 'A'], [66, '42', 'B'],
    [67, '43', 'C'], [68, '44', 'D'], [69, '45', 'E'], [70, '46', 'F'], [71, '47', 'G'], [72, '48', 'H'], [73, '49', 'I'],
    [74, '4A', 'J'], [75, '4B', 'K'], [76, '4C', 'L'], [77, '4D', 'M'], [78, '4E', 'N'], [79, '4F', 'O'], [80, '50', 'P'],
    [81, '51', 'Q'], [82, '52', 'R'], [83, '53', 'S'], [84, '54', 'T'], [85, '55', 'U'], [86, '56', 'V'], [87, '57', 'W'],
    [88, '58', 'X'], [89, '59', 'Y'], [90, '5A', 'Z'], [91, '5B', '['], [92, '5C', '\\'], [93, '5D', ']'], [94, '5E', '^'],
    [95, '5F', '_'], [96, '60', '`'], [97, '61', 'a'], [98, '62', 'b'], [99, '63', 'c'], [100, '64', 'd'], [101, '65', 'e'],
    [102, '66', 'f'], [103, '67', 'g'], [104, '68', 'h'], [105, '69', 'i'], [106, '6A', 'j'], [107, '6B', 'k'], [108, '6C', 'l'],
    [109, '6D', 'm'], [110, '6E', 'n'], [111, '6F', 'o'], [112, '70', 'p'], [113, '71', 'q'], [114, '72', 'r'], [115, '73', 's'],
    [116, '74', 't'], [117, '75', 'u'], [118, '76', 'v'], [119, '77', 'w'], [120, '78', 'x'], [121, '79', 'y'], [122, '7A', 'z'],
    [123, '7B', '{'], [124, '7C', '|'], [125, '7D', '}'], [126, '7E', '~'], [127, '7F', 'DEL']
];

const table = document.getElementById('ascii-table');
for (let i = 0; i < asciiTable.length; i++) {
    const row = table.insertRow();
    for (let j = 0; j < asciiTable[i].length; j++) {
        const cell = row.insertCell();
        cell.textContent = asciiTable[i][j];
    }
}


const dropdownMenu = document.createElement('ul');
dropdownMenu.setAttribute('id', 'dropdownMenu');
searchInput.parentNode.appendChild(dropdownMenu);





searchInput.addEventListener('input', () => {
    const input = searchInput.value.trim().toLowerCase();
    const filteredSuggestions = asciiTable.filter(data => {
        if (searchType.value === 'decimal' && data[0].toString().startsWith(input)) {
            return true;
        } else if (searchType.value === 'hex' && data[1].toLowerCase().startsWith(input)) {
            return true;
        } else if (searchType.value === 'character' && data[2].toLowerCase().startsWith(input)) {
            return true;
        }
        return false;
    });
    showSuggestions(filteredSuggestions);
});

function showSuggestions(filteredSuggestions) {
    dropdownMenu.innerHTML = '';
    if (filteredSuggestions.length === 0) {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
        filteredSuggestions.forEach(data => {
            const listItem = document.createElement('li');
            listItem.textContent = `Dec: ${data[0]}, Hex: ${data[1]}, Character: ${data[2]}`;
            listItem.onclick = () => {
                searchInput.value = searchType.value === 'decimal' ? data[0] : searchType.value === 'hex' ? data[1] : data[2];
                dropdownMenu.style.display = 'none';
            };
            dropdownMenu.appendChild(listItem);
        });
    }
}


function search() {
    const searchInputValue = searchInput.value.trim();
    const searchTypeValue = searchType.value;
    console.log('Search Input:', searchInputValue);
    console.log('Search Type:', searchTypeValue); 

    let result = 'No matching result found.';
    for (let i = 0; i < asciiTable.length; i++) {
        if (
            searchTypeValue === 'decimal' &&
            asciiTable[i][0].toString() === searchInputValue
        ) {
            result = `Dec: ${asciiTable[i][0]}, Hex: ${asciiTable[i][1]}, Character: ${asciiTable[i][2]}`;
            break;
        } else if (
            searchTypeValue === 'hex' &&
            asciiTable[i][1] === searchInputValue
        ) {
            result = `Dec: ${asciiTable[i][0]}, Hex: ${asciiTable[i][1]}, Character: ${asciiTable[i][2]}`;
            break;
        } else if (
            searchTypeValue === 'character' &&
            asciiTable[i][2] === searchInputValue
        ) {
            result = `Dec: ${asciiTable[i][0]}, Hex: ${asciiTable[i][1]}, Character: ${asciiTable[i][2]}`;
            break;
        }
    }
    if (result === 'No matching result found.') {
        alert('No matching result found.'); 
    } else {
        searchResult.innerHTML = result;
    }
}

const darkModeSlider = document.getElementById('darkModeSlider');
        const pageStyle = document.getElementById('bbksst');

        darkModeSlider.addEventListener('input', () => {
            const sliderValue = darkModeSlider.value;
            if (sliderValue === '1') {
                pageStyle.setAttribute('href', 'dark-mode.css');
            } else {
                pageStyle.setAttribute('href', 'style.css');
            }
        });


