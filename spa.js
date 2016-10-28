document.querySelector('#homeBtn').addEventListener('click', function(){
    document.querySelector('div').forEach(function(div){
        div.classlist.add('hidden')
    })
    document.querySelector('#homeScreen').classList.remove()
})
