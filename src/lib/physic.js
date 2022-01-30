const u = 1.66054*10**(-27)
const q = 1.602*10**(-19)
const scale = 4000;
export class Particle {
    constructor(x, y, vx, vy, m, q=-1, color){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.m = m;
        this.q = q;
        this.color = color;
    }

    update(dt, e_fields=[], b_fields=[], slits, screens, detectors, width, height){
        let a = this.a(e_fields, b_fields);
        let alive = true;
        let trapped = false;
        this.vx += a.x*dt;
        this.vy += a.y*dt;
        this.x += this.vx*dt*scale;
        this.y += this.vy*dt*scale;
        slits.forEach((S) => {
            if(S.l < this.x && this.x < S.l + S.w && S.t < this.y && this.y < S.t + S.h){
                if(S.t+(S.h-S.gap)/2 < this.y && S.t+S.h/2+S.gap > this.y){
                    alive = true;
                }
                else {
                    alive = false;
                }
            }
        })
        screens.forEach((S) => {
            if (S.l < this.x && this.x < S.l + S.w && S.t < this.y && this.y < S.t + S.h){
                trapped = Number(S.t+S.h-this.y);
            }
        })
        detectors.forEach((D, i) => {
            if (D.l < this.x && this.x < D.l + D.w && D.t < this.y && this.y < D.t + D.h){
                trapped = ["detector", i];
            }
        } )
        if(trapped){return trapped}
        if(!alive){return false};
        if (this.x > 5 && this.x < width-5 && this.y < height-5 && this.y > 0+5){
            return true;
        }
        
        return false;
    }

    a(e_fields, b_fields){
        let x = 0;
        let y = 0;
        e_fields.forEach((E) => {
            if (E.l < this.x && this.x < E.l + E.w && E.t < this.y && this.y < E.t + E.h){
                x += this.q*E.E.x/this.m;
                y += this.q*E.E.y/this.m;
            }
        })
        b_fields.forEach((B) => {
            if (B.l < this.x && this.x < (B.l + B.w) && B.t < this.y && this.y < (B.t + B.h)){
                x += (this.q*-this.vy*B.B)/this.m
                y += (this.q*this.vx*B.B)/this.m
            }
        })
        return {x: x, y: y};
    }
}

export class Field {
    constructor(l, t, w, h){
        this.l = l;
        this.t = t;
        this.w = w;
        this.h = h;
    }
}

export class Beam {
    constructor(p, color, intensity = 5){
        this.color = color;
        this.intensity = intensity;
        this.startp = Object.create(p);
        this.p = Object.create(p);
        this.moving_p = p;
        this.nodes = [];
        this.l = 0;
    }
}
export class BField extends Field{
    constructor(l, t, w, h, B){
        super(l, t, w, h);
        this.B = B;
    }
}

export class EField extends Field {
    constructor(l, t, w, h, E){
        super(l, t, w, h);
        this.E = E;
    }
}

export class Source {
    constructor(l, t){
        this.l = l;
        this.t = t;
        this.w = 50;
        this.h = 50;
    }
}

export class Slit {
    constructor(l, t, w, h, gap){
        this.l = l; 
        this.t = t; 
        this.w = w;
        this.h = h;
        this.gap = gap;
    }
}

export class Screen {
    constructor(l, t, w, h){
        this.l = l; 
        this.t = t; 
        this.w = w;
        this.h = h;
    }
}

export class Detector {
    constructor(l, t, w, h){
        this.l = l; 
        this.t = t; 
        this.w = w;
        this.h = h;
        this.count = 0;
    }

    pcount(){
        if (this.count > 1000){
            return String(Number(this.count).toExponential(2)).replace(".", ",")
        }
        else {
            return String(this.count).replace(".", ",")
        }
    }
}

export class Simulation {
    constructor(source, particles, e_fields, b_fields, slits = [], screens=[], beams = [], detectors = [], vs=[2*10**5, 3*10**5, 4*10**5], ms=[12*u]){
        this.source = source;
        this.particles = particles;
        this.e_fields = e_fields;
        this.b_fields = b_fields;
        this.slits = slits;
        this.screens = screens;
        this.speed = 2e-10;
        this.density = 5;
        this.trapped = [];
        this.stats = [];
        this.beams = beams;
        this.detectors = detectors;
        this.vs = vs;
        this.ms = ms;
        this.is = false;
        this.colors = ["blue", "red", "green"];
        this.q = -q;
    }
    
    //random_particle(vx_min=3.8*10**7, vx_max=3.8*10**7, vy_min=0, vy_max=0){
    random_particle(vs=this.vs, ms=this.ms, vy_min=0, vy_max=0){
        let rand_index = Math.floor(Math.random()*vs.length)
        let color = this.colors[rand_index%this.colors.length]
        return new Particle(
            this.source.l + this.source.w,
            this.source.t + this.source.h/2,
            vs[rand_index],
            vy_min + Math.random()*(vy_max-vy_min),
            ms[Math.floor(Math.random()*ms.length)],
            this.q,//*(-1)**Number(Math.random() < 0.5)
            color
            
        )
    }
    

    update(dt, width, height){
        this.particles.forEach((p,i, o) => {
            let status = p.update(dt*this.speed, this.e_fields, this.b_fields, this.slits, this.screens, this.detectors, width, height);
            if(typeof status === "number"){
                this.trapped.push(o[i])
                this.stats.push(status);
                o.splice(i, 1);
            }
            if(status == false || typeof status === "object"){
                o.splice(i, 1);
            }
        })
        
    }

    generate_beams(dt, width, height){
            let sim = this;
            let count;
            let alive;
            sim.detectors.forEach((d) => d.count = 0);
            this.beams.forEach((beam, j) => {
                count = 0;
                alive = true;
                beam.p = Object.create(beam.startp);
                beam.nodes = []
                beam.nodes.push({x: beam.p.x, y: beam.p.y})
                while(alive){
                    count += 1;
                    let status = beam.p.update(dt*10e-8, sim.e_fields, sim.b_fields, sim.slits, sim.screens, sim.detectors, width, height);
                    beam.nodes.push({x: beam.p.x, y: beam.p.y})
                    if(typeof status === "number"){
                        alive=false; // hier weiterleiten zum Detektor

                    }
                    if(status == false){
                        alive=false;
                    }
                    if (count > 5000){
                        alive=false;
                    }
                    if(typeof status === "object"){
                        if(status[0] == "detector"){
                            sim.detectors[Number(status[1])].count += beam.intensity;
                            alive = false;


                        }
                    }
                }
            })
            
    }
}