gsap.fromTo('.box', { scale: 0, backgroundColor: 'white' }, { duration: 2, scale: 1, yoyo: true, stagger: { each: .1, repeat: -1, yoyo: true, from: 'center' }})
