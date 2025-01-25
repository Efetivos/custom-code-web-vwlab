gsap.fromTo('.box', { scale: 0 }, { duration: 2, scale: 1, backgroundColor: '#000', yoyo: true, stagger: { each: .1, repeat: -1, yoyo: true, from: 'center' }})
