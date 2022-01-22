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

    update(dt, e_fields=[], b_fields=[], width, height){
        let a = this.a(e_fields, b_fields);
    
        this.vx += a.x*dt;
        this.vy += a.y*dt;
        this.x += (this.vx-0.5*a.x)*dt;
        this.y += (this.vy-0.5*a.x)*dt;
        if (this.x > 0 && this.x < width && this.y < height && this.y > 0){
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
            if (B.l < this.x && this.x < B.l + B.w && B.t < this.y && this.y < B.t + B.h){
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

export class Slit {
    constructor(){

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

export class Simulation {
    constructor(source, particles, e_fields, b_fields){
        this.source = source;
        this.particles = particles;
        this.e_fields = e_fields;
        this. b_fields = b_fields;
    }

    random_particle(vx_min=2, vx_max=2, vy_min=0, vy_max=0, m_min=1, m_max=5){
        return new Particle(
            this.source.l + this.source.w,
            this.source.t + this.source.h/2,
            vx_min + Math.random()*(vx_max-vx_min),
            vy_min + Math.random()*(vy_max-vy_min),
            Math.round(m_min + Math.random()*(m_max - m_min)),
            0.1//*(-1)**Number(Math.random() < 0.5)
            
            
        )
    }
    

    update(width, height, dt=1){
        this.particles.forEach((p,i, o) => {
            if(!p.update(dt, this.e_fields, this.b_fields, width, height)){
                o.splice(i, 1);
            }
        })
    }
}