import { WoMain } from './wo-main'

describe('wo-main', ()=>{
    const main = new WoMain();
    it('初始化', ()=>{
        expect(main.isOpen).toBe(false);
        expect(main.imageUrl).toBe('')
        expect(main.location).toEqual('')
    })
    it('开关', ()=>{
        main.changeState()
        expect(main.isOpen).toBe(true);
    })
})
