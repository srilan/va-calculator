window.onload = () => {
    document.querySelectorAll("fragment").forEach((e)=> {
      console.log("e", e.getAttribute("src"))
      const src = e.getAttribute("src")
      fetch(src).then((res)=> {
        return res.text();
      }).then((res)=> {
        e.outerHTML = res;
        e.remove();
      })
    })
}