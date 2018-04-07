!function(){
    var view=document.querySelector('section.message')
    var model={
        init:function(){
            var APP_ID = '1K8zy6moFNIUAhAPgA0dh9Er-gzGzoHsz';
            var APP_KEY = 'A4SmuzzkvdBIDuNYXAF7M5qB';
            AV.init({appId: APP_ID,appKey: APP_KEY});  
        },
        fetch:function(){
            var query = new AV.Query('Message');
            return query.find()//返回promise
        },
        save: function (name,content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                'content': content,
                'name': name
            })//promise
        }
    }
    var controller={
        view: null,
        model: null,
        messageList: null,
        init:function(view,model){  
            this.view=view
            this.model=model
            this.messagesList=document.querySelector('#messagesList')
            this.myForm=document.querySelector('form')
            this.model.init()
            this.showMessages()
            this.bindEvents()        
        },
        bindEvents:function(){           
            this.myForm.addEventListener('submit', (e)=> {
                e.preventDefault()
                this.sendMessage()
            })
        },
        showMessages:function(){
            this.model.fetch().then((messages)=> {
                let array = messages.map(item => item.attributes)
                array.forEach(item => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messagesList.appendChild(li)

                });
            }, function () {
                alert('提交失败，请重新提交')
            })
        },
        sendMessage:function(){
            let myForm=this.myForm
            let content = myForm.querySelector('input[name=content]').value
            let name=myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (object) {
                    let li=document.createElement('li')
                    li.innerText=`${object.attributes.name}:${object.attributes.content}`
                    let messagesList=document.querySelector('#messagesList')                   
                    messagesList.appendChild(li)
                    myForm.querySelector('input[name=content]').value=''
                    myForm.querySelector('input[name=name]').value=''    
            })
        }
    }
    controller.init(view, model)
}.call()


