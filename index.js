/**
 * @file   mofron-comp-edittxt/index.js
 * @author simpart
 */
const mf    = require('mofron');
const Text  = require('mofron-comp-text');
const Input = require('mofron-comp-input');
const Click = require('mofron-event-click');
const Focus = require('mofron-event-focus');

/**
 * @class mofron.comp.{@Comp-name}
 * @brief {@comp-name} component for mofron
 */
mf.comp.EditTxt = class extends Text {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('EditTxt');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts () {
        try {
            super.initDomConts();
            
            this.event([
                new Click(
                    (p1)=> {
                        try {
                            if (false === p1.input().visible()) {
                                p1.input().getConfig('event', 'Focus').focus(true);
                                p1.target().style({ 'display' : 'none' });
                                p1.input().execOption({
                                    visible : true,
                                    focus   : true
                                });
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    }
                )
            ]);
            
            this.addChild(this.input());
            
            let tgt = new mf.Dom('div', this);
            this.target().addChild(tgt);
            this.target(tgt);

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    input (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                if (undefined === this.m_input) {
                    let fcs = (p1, p2, p3) => {
                        try {
                            if (false === p3) {
                                p2.text(p1.text());
                                p2.target().style({ 'display' : null });
                                p1.visible(false);
                                
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    };
                    this.input(
                        new Input({
                            visible : false,
                            event   : [ new Focus(new mf.Param(fcs, this)) ]
                        })
                    );
                }
                return this.m_input;
            }
            if (true !== mf.func.isInclude(prm, 'Input')) {
                throw new Error('invalid parameter');
            }
            this.m_input = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try {
            let ret = super.text(prm);
            this.input().text(prm);
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (prm) {
        try {
            let ret = super.size(prm);
            if (undefined === ret) {
                this.input().height(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            return this.input().width(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.EditTxt;
/* end of file */
