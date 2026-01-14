const readline = require('readline')
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
function Choice(){
    rl.question(`Would you like to add a diary entry or read a old one
    To add a diary entry press 1
    To read a diary entry press 2: `,(input)=>{
        if(input===1){
            addDiaryEntry();
            rl.close();
        }else if(input===2){
            readDiaryEntry();
            rl.close();
        }else{
            console.log('Please enter a vaild option');
            rl.close();
            Choice()
        }
    });
};
Choice();
function addDiaryEntry(){
    rl.question("Enter the title of your diary entry: ",(title)=>{
        readlinel.question('Enter the body of your diary entry',(body)=>{
            const newEntry{
                title: title,
                body: body
            };
            fs.readfile('data.json','utf-8',(err,data)=>{
                let diaryEntries=[];
                if(!err && data){
                    diaryEntry=JSON.parse(data)
                }
                diaryEntries.push(newEntry);
                fs.writeFile('diary.json',json.stringify(diaryEntries),(err)=>{
                    if(err){
                        console.error(err);
                    }else{
                        console.log("Diary entry recorded successfully");
                    }
                    rl.close();
                });
            });
        });
    });
};
