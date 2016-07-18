# Programming Task
#### Web applications developer

## About this Task

We are asking you to implement a simple web application to help us better appreciate your programming and problem-solving skills. The task is intended to be straightforward and should not occupy more than a couple of hours of your time. We appreciate elegance, simplicity, and readability.

## Goal
The [Gene Ontology](http://geneontology.org/) (GO) project is a collaborative effort to provide consistent descriptions of gene products (e.g. proteins). In particular, GO maintains ontologies that describe molecular function, the biological processes in which a gene product participates, and its location within a cell. 

Biologists are often faced with the task of finding out more information about a particular protein or a list of proteins derived from an experiment. A useful resource is the [UniProt KnowledgeBase](http://www.uniprot.org/help/about) (UniProtKB) which is a manually curated database containing a rich set of annotations for proteins across many species. An appreciation of the functions and processes previously associated with a protein of interest can provide valuable clues about why it might have arisen within an experiment.      

## Step I: Implement
You will implement ‘GO List’: An application enabling researchers to retrieve and view GO annotations and other helpful information related to a protein within the UniProt KnowledgeBase. The application will be accessed through a web browser. The GO List implementation is completely up to you! To help you along we have included some basic functional requirements, technical details, and some restrictions.

### Functional Requirements
GO List should:
  - Accept valid UniProt identifiers (ID) for individual proteins (e.g. 'P04637') 
  - Display the GO terms ('Molecular Function' and 'Biological Process') associated with each UniProt ID submitted by users 
  - Display the list of UniProt IDs submitted by users
  - Keep track of UniProt IDs submitted by users
  - Permit users to delete UniProt IDs from the list 
  
### Usability Requirements
The GO List user interface should:
  - Be intuitive and not require detailed reading of documentation to use
  - Be easy to learn
  - Give appropriate feedback (e.g. an invalid UniProt ID is entered) 

### Technical Details
Clone the GitHub respository for the [GO List](https://github.com/jvwong/GOList) which contains a skeleton application. Inside the GOList directory you will find:

  - `index.html` - entrypoint for your Grocery List application
  - `README.md` - for you to document your submission (see Step 2 below)
  - [`package.json`](https://docs.npmjs.com/files/package.json) - specifying dependencies
  - [`gulpfile.js`](http://gulpjs.com/) - specifying tasks

The skeleton application is merely a suggestion to get you started. You are free to edit the contents and add/remove any ancillary directories/files within the Grocery_List parent directory. We do, however, require that your application be viewable upon opening a supplied  `index.html` file locally in a web browser. This alone should be sufficient to view your Grocery List application. The HTML output will be viewed on a desktop in Chrome (v51.0.2074).

### Restrictions
To reduce the complexity of submissions, we suggest you adhere to a few restrictions:
- Do not alter the name of the parent Grocery_List directory
- Do not implement or include dependencies on a web server
- Do not implement or include dependencies on database persistence
- Avoid any user-specific features (e.g. sign up, login, authentication, authorization)


## Step 2: Document
We have supplied a markdown file (`README.md`) for the purposes of documenting your submission. Edit the contents of this file including the ‘Contact’ details. The ‘Description’ should contain a brief (< 500 words) overview of major features and design decisions. If necessary, use the ‘Setup’ section for step-by-step instructions on how to get your application to run in a browser (e.g. loading npm or bower dependencies).

## Step 3: Submit
Zip the Grocery_List directory containing your code submission and associated documentation into a single file. At a bare minimum, your submission must contain the following two files:
1. `index.html`
2. `README.md`

Email your submission to ccbr.software.jobs@gmail.com. We will confirm your submission upon receipt via email.
