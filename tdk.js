window.animate = function() {}
if (window.animate != undefined && window.animate != null) {
    tdk_tmpfunca = function() {
        if (window.tdk_canvas != undefined && window.tdk_canvas != null) {
            let tmp_store = window.tdk_ctx.fillStyle
            window.tdk_ctx.fillStyle = "#000000"
            window.tdk_ctx.fillRect(0, 0, 600, 600)
            window.tdk_ctx.fillStyle = tmp_store
        }

        window.animate()

        requestAnimationFrame(tdk_tmpfunca)
    }
}

requestAnimationFrame(tdk_tmpfunca)

let tdk = {
    message: (head, msg) => {
        swal({
            icon: "info",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    info: (head, msg) => {
        swal({
            icon: "info",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    popup: (head, msg) => {
        swal({
            icon: "info",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },

    alert: (head, msg) => {
        swal({
            icon: "warning",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    warning: (head, msg) => {
        swal({
            icon: "warning",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    error: (head, msg) => {
        swal({
            icon: "warning",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },

    accessDenied: (head, msg) => {
        swal({
            icon: "error",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    bad: (head, msg) => {
        swal({
            icon: "error",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },
    noaccess: (head, msg) => {
        swal({
            icon: "error",
            title: head,
            text: msg,
            closeOnClickOutside: false
        })
    },

    interval: function(func, secs) {
        setInterval(func, secs * 1000)
    },

    interval: function(func) {
        tdk_tmpfuncb = function() {
            func()
            requestAnimationFrame(tdk_tmpfuncb)
        }
        requestAnimationFrame(tdk_tmpfuncb)
    },

    init: function() {
        window.tdk_canvas = document.createElement("canvas")
        window.tdk_canvas.style.position = "fixed"
        window.tdk_canvas.style.top = "0px"
        window.tdk_canvas.style.left = "0px"
        window.tdk_canvas.width = "600"
        window.tdk_canvas.height = "600"
        document.body.appendChild(window.tdk_canvas)
        window.tdk_ctx = window.tdk_canvas.getContext("2d")
        window.tdk_outline = false
        window.tdk_fill = true
        window.tdk_ctx.fillStyle = "#FFFFFF"
        window.tdk_ctx.strokeStyle = "#FFFFFF"
        console.log("Initalized TDK Canvas")
    },

    setColor: function(name) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to set the color of the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
        }

        window.tdk_ctx.fillStyle = name
        window.tdk_ctx.strokeStyle = name
    },

    outline: function(width) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to set the mode of the TDK canvas to outline, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
        }

        window.tdk_ctx.lineWidth = width.toString();
        window.tdk_outline = true
        window.tdk_fill = false
    },

    fill: function() {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to set the mode of the TDK canvas to outline, but no TDK canvas initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
        }

        window.tdk_outline = false
        window.tdk_fill = true
    },

    rect: function(x, y, w, h) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw a rectangle on the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
        }

        let newX = x * 3 + 300 // to scale 0-100 into 0-600 and 0 being center
        let newY = y * 3 + 300 // to scale 0-100 into 0-600 and 0 being center
        let newW = w * 6 // to scale 0-100 into 0-600
        let newH = h * 6 // to scale 0-100 into 0-600

        if (window.tdk_fill) {
            window.tdk_ctx.fillRect(newX, newY, newW, newH)
        } else if (window.tdk_outline) {
            window.tdk_ctx.rect(newX, newY, newW, newH)
        }
    },

    circle: function(x, y, r) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw a cirlce on the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
        }

        let newX = x * 3 + 300 // to scale 0-100 into 0-600 and 0 being center
        let newY = y * 3 + 300 // to scale 0-100 into 0-600 and 0 being center
        let newR = r * 6 // to scale 0-100 into 0-600

        window.tdk_ctx.beginPath();
        window.tdk_ctx.arc(newX, newY, newR, 0, 2 * Math.PI);

        if (window.tdk_fill) {
            window.tdk_ctx.fill();
        } else if (window.tdk_outline) {
            window.tdk_ctx.stroke();
        }
    },
    shape: function(points) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw a shape on the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
            return
        }

        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw a shape on the TDK canvas, but only specificed a 1-Dimensional Point.",
                closeOnClickOutside: false
            })
            return
        }

        window.tdk_ctx.beginPath();

        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            if (i == 0) {
                window.tdk_ctx.moveTo(point[0] * 3 + 300, point[1] * 3 + 300);
            } else if (i > 0) {
                window.tdk_ctx.lineTo(point[0] * 3 + 300, point[1] * 3 + 300);
            }

        }

        if (points.length == 2) {
            window.tdk_ctx.stroke();
        } else if (window.tdk_fill) {
            window.tdk_ctx.fill();
        } else if (window.tdk_outline) {
            window.tdk_ctx.stroke();
        }
    },

    line: function(point1, point2, width) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw a line on the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
            return
        }

        window.tdk_ctx.beginPath();

        window.tdk_ctx.moveTo(point1[0] * 3 + 300, point1[1] * 3 + 300);
        window.tdk_ctx.lineTo(point2[0] * 3 + 300, point2[1] * 3 + 300);

        var tmp = window.tdk_ctx.lineWidth
        window.tdk_ctx.lineWidth = width.toString()
        window.tdk_ctx.stroke();
        window.tdk_ctx.lineWidth = tmp
    },

    image: function(x, y, src) {
        if (window.tdk_canvas == undefined || window.tdk_canvas == null) {
            swal({
                icon: "warning",
                title: "Programming Error",
                text: "TDK noticed that there was an error in this pages programming. The developer tried to draw an image on the TDK canvas, but no TDK canvas was initalized(see: tdk.init()).",
                closeOnClickOutside: false
            })
            return
        }

        if (window.tixte_image_src == undefined || src != window.tixte_image_src) {
            // This will be called if no image has been drawn before
            window.tixte_image_src = src

            window.tixte_img = new Image();
            window.tixte_img.onload = function() {
                window.tdk_ctx.drawImage(window.tixte_img, x, y);
            };
            window.tixte_img.src = window.tixte_image_src;
            return
        }
        // This will just redraw the image instead of fetching it again or changin the source.
        window.tdk_ctx.drawImage(window.tixte_img, x, y);
    },
}

const _tdk = tdk;
export { _tdk as tdk };