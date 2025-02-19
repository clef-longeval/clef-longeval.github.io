# LongEval 2025 

This repository contains the **French dataset** for the **LongEval 2025 Information Retrieval Challenge**.  
The dataset is structured to support **training and evaluation** in **Information Retrieval (IR)** tasks.

?? **Official Challenge Website**: [LongEval 2025](https://clef-longeval.github.io/)

---

## ?? Folder Structure  

The dataset is structured as follows:

release_2025/
+-- French/
    +-- LongEval Train Collection/   # Training data (to be released first)
    ¦   +-- Json/                    # JSON-formatted document collection
    ¦   +-- qrels/                   # Relevance judgments (Qrels), divided by month
    ¦   ¦   +-- 2022-06_fr/          # Qrels for June 2022
    ¦   ¦   ¦   +-- qrels_processed.txt  # Processed qrels file
    ¦   ¦   +-- 2022-07_fr/          # Qrels for July 2022
    ¦   ¦   +-- ...                  # Other months
    ¦   +-- Trec/                    # TREC-formatted document collection, divided by month
    ¦   ¦   +-- 2022-06_fr/          # Documents for June 2022
    ¦   ¦   +-- 2022-07_fr/          # Documents for July 2022
    ¦   ¦   +-- ...                  # Other months
    +-- LongEval Test Collection/    # Test data (to be released later)
    +-- collection_db.db             # Database mapping document IDs to URLs for the full collection (Train + Test data)
    +-- queries_db.db                # Database mapping query IDs to query texts
    +-- queries.txt                  # Plain List of queries and IDs
    +-- inspect_db.py                # Script to inspect the document database
    +-- statistics_collection.py     # Script giving preliminary statistics about the all collection


---

## ?? Dataset Description  

### **1?? LongEval Train Collection**
- **Json/** ? Contains the document collection in **JSON format**.
- **Trec/** ? Contains the document collection in **TREC format**.
- **qrels/** ? Relevance judgments mapping **queries to relevant documents**, organized by month.

### **2?? LongEval Test Collection**
- The test data will be released **later**.

### **3?? Database Files**
- **`collection_db.db`** ? SQLite database that maps **document IDs** to their respective **URLs (Train + Test data)**.
- **`queries_db.db`** ? SQLite database linking **query IDs** with their respective **query texts**.
- **`queries.txt`** ? A **plain text file** listing all queries used in this dataset.

---

## ??? How to Use `inspect_db.py`

The `inspect_db.py` script allows participants to **inspect the document collection database** (`collection_db.db`).  
It helps retrieve information such as:
- The **URL** of a document.
- The **last update timestamp** of the document in the collection.
- The **month(s)** in which the document appears.

### ?? **Usage Example**

To check the details of a document by its ID, run:

python inspect_db.py collection_db.db --id <DOCUMENT_ID>

Tables in the database: [('mapping',), ('sqlite_sequence',)]

Structure of table 'mapping':
(0, 'id', 'INTEGER', 0, None, 1)
(1, 'url', 'TEXT', 0, None, 0)
(2, 'last_updated_at', 'TEXT', 0, None, 0)
(3, 'date', 'TEXT', 0, None, 0)

Record with ID 1:
{
    "id": 1,
    "url": "https://www.blogduvoyage.fr/roadtrip-usa-conseils/",
    "last_updated_at": [
        1640160479,
        1640160479
    ],
    "date": [
        "2022-06",
        "2022-06"
    ]
}


## ?? About the LongEval Challenge  

This dataset is part of the **LongEval 2025 challenge**, designed to evaluate **longitudinal information retrieval** over time.  
Participants will work with **time-based IR tasks**, using evolving document collections and queries.

?? **More details**: [LongEval 2025 Challenge](https://clef-longeval.github.io/)
