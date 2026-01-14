const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
function Choice(){
    rl.question(`Would you like to add a diary entry or read a old one
    To add a diary entry press 1
    To read a diary entry press 2
    To exit press 3: 
    `,(input)=>{
        if(input==='1'){
            addDiaryEntry();
            
        }else if(input==='2'){
            readDiaryEntry();
        }else if(input==='3'){
            console.log('Thank you for using me application');
            rl.close();
            process.exit(0);
        }else{
            console.log('Please enter a valid option');
            Choice();
        }
    });
};
Choice();
function addDiaryEntry(){
    rl.question("Enter the title of your diary entry: ",(title)=>{
        rl.question('Enter the body of your diary entry: ',(body)=>{
            const newEntry={
                title: title,
                body: body
            };
            fs.readFile('data.json','utf-8',(err,data)=>{
                let diaryEntries=[];
                if(!err && data){
                    diaryEntries=JSON.parse(data)
                }
                diaryEntries.push(newEntry);
                fs.writeFile('data.json',JSON.stringify(diaryEntries),(err)=>{
                    if(err){
                        console.error(err);
                    }else{
                        console.log("Diary entry recorded successfully");
                    }
                    Choice();
                });
            });
        });
    });
};
    function  readDiaryEntry(){
        rl.question('Please enter the title of the diary entry you would like to see',(Title)=>{
            fs.readFile('data.json','utf-8',(err,data)=>{
                if(err){
                    console.log('Error in finding the requested title please try again');
                    readDiaryEntry();
                    return;
                }if(data){
                    const diaryEntries=JSON.parse(data);
                    const found = diaryEntries.find((entry) => entry.title === Title);
                    if(found){
                        console.log(`Title: ${found.title}`);
                        console.log(`Body: ${found.body}`);
                    }else{
                        console.log("Given title was not found");
                    }
                }
                Choice();
            });
        });
    };
