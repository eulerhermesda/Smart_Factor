
var Invoice_Contract =[
    {
      "constant": true,
      "inputs": [],
      "name": "_invoice",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "currentAmount",
          "type": "uint256"
        },
        {
          "name": "currency",
          "type": "uint256"
        },
        {
          "name": "creationDate",
          "type": "uint256"
        },
        {
          "name": "dueAt",
          "type": "uint256"
        },
        {
          "name": "issueAt",
          "type": "uint256"
        },
        {
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "name": "buyerAddress",
          "type": "address"
        },
        {
          "name": "factorAddress",
          "type": "address"
        },
        {
          "name": "isActive",
          "type": "bool"
        },
        {
          "name": "paymentInfo",
          "type": "address"
        },
        {
          "name": "policyAttached",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "_policy",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "policyList",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "_creator",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "currency",
          "type": "uint256"
        },
        {
          "name": "dueAt",
          "type": "uint256"
        },
        {
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "name": "buyerAddress",
          "type": "address"
        },
        {
          "name": "paymentInfo",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "statusChanged",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentAmount",
      "outputs": [
        {
          "name": "currentAmount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAmount",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isActive",
      "outputs": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSeller",
      "outputs": [
        {
          "name": "seller",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBuyer",
      "outputs": [
        {
          "name": "buyer",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDueDate",
      "outputs": [
        {
          "name": "dueAt",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCreationDate",
      "outputs": [
        {
          "name": "dueAt",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrency",
      "outputs": [
        {
          "name": "dueAt",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCounterpartAddress",
      "outputs": [
        {
          "name": "counterpartAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPaidStatus",
      "outputs": [
        {
          "name": "status",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPolicyAttached",
      "outputs": [
        {
          "name": "policyAttached",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_policyList",
          "type": "address"
        }
      ],
      "name": "setPolicyList",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPolicyList",
      "outputs": [
        {
          "name": "policyL",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFactor",
      "outputs": [
        {
          "name": "fact",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "displayInvoice",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "currency",
          "type": "uint256"
        },
        {
          "name": "dueAt",
          "type": "uint256"
        },
        {
          "name": "issueAt",
          "type": "uint256"
        },
        {
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "name": "buyerAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "validate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "gotPaid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "policyAddress",
          "type": "address"
        }
      ],
      "name": "attachPolicy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "paymentInfo",
          "type": "address"
        }
      ],
      "name": "setPaymentInformation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "add",
          "type": "address"
        }
      ],
      "name": "setFactorAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var Invoice_List = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_policyList",
          "type": "address"
        }
      ],
      "name": "setPolicyList",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInvoiceListLength",
      "outputs": [
        {
          "name": "length",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "currency",
          "type": "uint256"
        },
        {
          "name": "dueAt",
          "type": "uint256"
        },
        {
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "name": "buyerAddress",
          "type": "address"
        },
        {
          "name": "paymentInfo",
          "type": "address"
        }
      ],
      "name": "createInvoice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "invoice",
          "type": "address"
        }
      ],
      "name": "addInvoice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getInvoiceAtIndex",
      "outputs": [
        {
          "name": "invoice",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

var Matching_Account_Invoice_List = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "address"
        }
      ],
      "name": "addInvoiceListAt",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "addRemiseList",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRemiseList",
      "outputs": [
        {
          "name": "listRemise",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "address"
        }
      ],
      "name": "getInvoiceListAt",
      "outputs": [
        {
          "name": "listInvoice",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Index_Remise",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Index_Invoice",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "address"
        }
      ],
      "name": "getRemiseList",
      "outputs": [
        {
          "name": "listRemise",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "Index_Policy",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInvoiceList",
      "outputs": [
        {
          "name": "listInvoice",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "addInvoiceList",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_policyList",
          "type": "address"
        }
      ],
      "name": "setPolicyList",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getPolicyList",
      "outputs": [
        {
          "name": "policy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

var Payment_Information = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "lastName",
          "type": "string"
        },
        {
          "name": "firstName",
          "type": "string"
        },
        {
          "name": "IBAN",
          "type": "string"
        }
      ],
      "name": "setInformation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getInformation",
      "outputs": [
        {
          "name": "lastName",
          "type": "string"
        },
        {
          "name": "firstName",
          "type": "string"
        },
        {
          "name": "IBAN",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "lastName",
          "type": "string"
        },
        {
          "name": "firstName",
          "type": "string"
        },
        {
          "name": "IBAN",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ]

var Policy_Contract = [
    {
      "constant": true,
      "inputs": [],
      "name": "policy",
      "outputs": [
        {
          "name": "totalAmount",
          "type": "uint256"
        },
        {
          "name": "currentAmount",
          "type": "uint256"
        },
        {
          "name": "isActive",
          "type": "bool"
        },
        {
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "name": "creationDate",
          "type": "uint256"
        },
        {
          "name": "validator",
          "type": "address"
        },
        {
          "name": "factor",
          "type": "address"
        },
        {
          "name": "buyer",
          "type": "address"
        },
        {
          "name": "seller",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "invoiceAddress",
          "type": "address"
        }
      ],
      "name": "invoiceSubscribe",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getValidator",
      "outputs": [
        {
          "name": "validator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reject",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFactor",
      "outputs": [
        {
          "name": "factor",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getTotalAmount",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "addCurrentAmount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRequestAmount",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentRequest",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "name": "isActive",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRequestDate",
      "outputs": [
        {
          "name": "date",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDeleted",
      "outputs": [
        {
          "name": "deleted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "invoicePaid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "removeCurrentAmount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getExpireDate",
      "outputs": [
        {
          "name": "date",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "cancel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isRequestActive",
      "outputs": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "name": "buyer",
          "type": "address"
        },
        {
          "name": "seller",
          "type": "address"
        },
        {
          "name": "factor",
          "type": "address"
        },
        {
          "name": "validator",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "statusChanged",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentAmount",
      "outputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isActive",
      "outputs": [
        {
          "name": "isActive",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSeller",
      "outputs": [
        {
          "name": "seller",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBuyer",
      "outputs": [
        {
          "name": "buyer",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCreationDate",
      "outputs": [
        {
          "name": "date",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "expireDate",
          "type": "uint256"
        }
      ],
      "name": "validate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var Policy_List = [
    {
      "constant": true,
      "inputs": [],
      "name": "getPoliciyListLength",
      "outputs": [
        {
          "name": "length",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "buyer",
          "type": "address"
        },
        {
          "name": "seller",
          "type": "address"
        }
      ],
      "name": "findPolicy",
      "outputs": [
        {
          "name": "policy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getPolicyAtIndex",
      "outputs": [
        {
          "name": "policy",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "expireDate",
          "type": "uint256"
        },
        {
          "name": "buyer",
          "type": "address"
        },
        {
          "name": "seller",
          "type": "address"
        },
        {
          "name": "factor",
          "type": "address"
        },
        {
          "name": "validator",
          "type": "address"
        }
      ],
      "name": "createPolicy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "policy",
          "type": "address"
        }
      ],
      "name": "addPolicy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

var Remise = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "invoice",
          "type": "address"
        }
      ],
      "name": "addInvoice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getInvoiceAtIndex",
      "outputs": [
        {
          "name": "invoice",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getNumberInvoice",
      "outputs": [
        {
          "name": "length",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

var Remise_List = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "remise",
          "type": "address"
        }
      ],
      "name": "addRemise",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRemiseListLength",
      "outputs": [
        {
          "name": "length",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRemiseAtIndex",
      "outputs": [
        {
          "name": "remise",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

var Invoice_Factory = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getAtIndex",
      "outputs": [
        {
          "name": "invoice",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "currency",
          "type": "uint256"
        },
        {
          "name": "dueAt",
          "type": "uint256"
        },
        {
          "name": "sellerAddress",
          "type": "address"
        },
        {
          "name": "buyerAddress",
          "type": "address"
        },
        {
          "name": "paymentInfo",
          "type": "address"
        }
      ],
      "name": "newInvoice",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLength",
      "outputs": [
        {
          "name": "length",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]