export const month = [
    { label: '-- select option --', value: '' },
    { value: "Jan 2023", label: "Jan 2023" },
    { value: "Feb 2023", label: "Feb 2023" },
    { value: "Mar 2023", label: "Mar 2023" },
    { value: "Arp 2023", label: "Arp 2023" },
    { value: "May 2023", label: "May 2023" },
    { value: "Jun 2023", label: "Jun 2023" },
    { value: "Jul 2023", label: "Jul 2023" },
    { value: "Aug 2023", label: "Aug 2023" },
    { value: "Sep 2023", label: "Sep 2023" },
    { value: "Oct 2023", label: "Oct 2023" },
    { value: "Nov 2023", label: "Nov 2023" },
    { value: "Des 2023", label: "Des 2023" },
  ];

  export const transactiontype = [
    { label: '-- select option --', value: '' },
    { value: "Home Expense", label: "Home Expense" },
    { value: "Personal Expense", label: "Personal Expense" },
    { value: "Income", label: "Income" },
  ];

 export const fromaccount = [
    { label: '-- select option --', value: '' },
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

  export const toaccount = [
    { label: '-- select option --', value: '' },
    { value: "Personal Account", label: "Personal Account" },
    { value: "Real Living", label: "Real Living" },
    { value: "My Dream Home", label: "My Dream Home" },
    { value: "Full Circle", label: "Full Circle" },
    { value: "Core Realtors", label: "Core Realtors" },
    { value: "Big Block", label: "Big Block" },
  ];

   export const transaction={
    transactiondate: "",
    month: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
  }
 export const selectgroupby = [
    { value: "month", label: "Month Year" },
    { value: "transactiontype", label: "Transaction Type" },
    { value: "fromaccount", label: "From Account" },
    { value: "toaccount", label: "To Account" },
    { value: "none", label: "none" },
];