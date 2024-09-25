// Function to load JSON data from file
async function loadJSON(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();
    return data;
  } catch (error) {
    speak("Error loading JSON.");
    console.error("Error loading JSON:", error);
  }
}

// Save data and timestamp to localStorage
function saveDataToLocalStorage(key, data) {
  const now = new Date().getTime();
  const item = {
    data: data,
    timestamp: now,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Check if data is still valid (within 1 day)
function getDataFromLocalStorage(key) {
  const itemStr = localStorage.getItem(key);

  // If the item doesn't exist, return null
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date().getTime();

  // Compare timestamp with 1 day (86400000 ms)
  if (now - item.timestamp > 86400000) {
    // Data is older than 1 day, so remove it
    localStorage.removeItem(key);
    return null;
  }

  // Data is still valid
  return item.data;
}

// Main function to handle fetching and storing JSON
async function fetchAndStoreData(link, filename) {
  const key = filename;
  const storedData = getDataFromLocalStorage(key);

  if (storedData) {
    // If data is still valid, use it
    // console.log("Using cached data:", storedData);
  } else {
    // If data is expired or doesn't exist, fetch new data
    const data = await loadJSON(link);
    if (data) {
      // console.log("Fetched new data:", data);
      saveDataToLocalStorage(key, data);
    }
  }
}

// Call the main function

fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=PgLZppw1XxullTBZnAN2CmmGTUf_Fy0oo9wlLdcHg37NCD277GWG2ek8uBfC5HBmFbwgfHMDN3L3iBRRPLebQynujY2_cLjAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKvshnxivG3Pc47aCTWzF2hVbUrjoyTuVTl_Ubm6NKxJKJXiWfGKld7HBjE_yhaB6SNIReUppM_fOLtD8a3wvd9B__TK9m4yvQ&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "software_deplopment"
);
fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=QxnU7-d2uLJHnTZM-4qDJbc0S7x8nMqs7Ios8O7c_Ou_WY3l7evh9fMjja8NOtHaqpJNuyczNK8c6Yv39mCbDLl0Ro4e450Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJvEtcj_DqiTxYMLrh43WbNxDHnB0tMKPz45O-Sh2BvVVZcG1VU7TM9Wos0LH9X89VKbiOup-qE8SxTEK6FasjpN6Q5XMa2uwA&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "web_deplopment_frontend"
);

fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=7Rv9d0-s0c4OwXk44r_f5tUapQkEW1L4i8-3fuuOdP7wT8iuZf1lUrtP91jUF20tHFRW2CXxDELFfY8C65jhPMOe6CzZ8UXcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNsNqiBJvsWSGVa_arKYRQNYsOahQVbMvusIBYWHN346WKpoPrsWW-DleGH57NpSEw-6v3RThQIVa5chj6UOyuR702A0iO0h0A&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "sql_aws"
);

fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=1xdqV7JvmHjxfpvKzeOI_Dy9GJinBvFaQuSIybIeJBhoj7C2MRdK-2mvQoI-19m9roUO79nNT3hTIcFn3m8FRm6VqqF0_N9sm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPpGV1OlBdO_bGJKeKklRCx2GjO8K3rGwKqga0hrzLMrLwNGAY5h2ZNLSaX36vvIEHwTomp8-v71-_AKHEHdjAO96U1KJIkX8w&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "mern"
);
fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=KOEYSSE2X0dCnfq47K4O-ljgUsl4fmV9JTu54X45ukw7JgSNXby8O321Ro5nZPC6oFwwRQVF712FxtFK3kr2ADJlNMc_cC8Lm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNCnDkG2srhdXh5Gy9NvvrXqsJbtG4dkLUm_5cAokAA5Cstz3x-iNvemWRNjsfcmSOLvocWx4tczkA10RbvJF35Jv1zpgZwvzw&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "subject"
);
fetchAndStoreData(
  "https://script.googleusercontent.com/macros/echo?user_content_key=TB28IqPTuwc_Ib_0RwfJh44drfrBACo5bHnPT0kej7ACSedyW8dkZjl_2VCmhBzo4UE_DETVjtH3iBRRPLebQ63ObMeDg0eqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO17KQzyf5ewKNLU8N_J0QODdTiifD4hyZp3Can_Ink0qm-3Pp1hiTpkZ39pF2a_Zz-qAggsNHKfRlDEf22-Zn3V0nxBK33Hig&lib=MroavXgmmlMk2V8o2oDotMBkPGQ8EWvdh",
  "hr_tricky"
);
