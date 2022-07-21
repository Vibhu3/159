AFRAME.registerComponent("cursorlistener", {
    schema: {
        selectedItemId: { def: "", type: "string" }
    },
    init: function () {
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
    },
    handlePostersListState:function(){
        const id=this.el.getAttribute("id")
        const postersId=["super-man", "spider-man","captain-aero-comics", "outer-space"]
        if (postersId.includes (id)){
            const postersContainer= document.querySelector("#posters-container");
            postersContainer.setAttribute("cursorlistener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"#1f5f93",
                opacity:1
            })
        }
    },

    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePostersListState()
        })
    },
    handleMouseEnterEvent: function () {
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id")
            const postersId = ["super-man", "spider-man", "captain-aero-comics", "outer-space"]
            if (postersId.includes(id)) {
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursorlistener", {
                    selectedItemId: id
                })
                this.el.setAttribute("material", {
                    color: "#1f5f93",
                    opacity: 1
                })
            }
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId}=this.data;
            if(selectedItemId){
                const el=document.querySelector(`#${selectedItemId}`)
                const id=el.getAttribute("id");
                if(id==selectedItemId){
                    el.setAttribute("material",{
                        color:"#ffffff",
                        opacity:1
                    })
                }
            }
        })
    }
})