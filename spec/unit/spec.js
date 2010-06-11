describe 'showLink()'

  before_each
    html = $(fixture("fieldset"))
    fieldset = html.find("fieldset")
    fieldset.showLink(function() {
      return "anchor text";
    });

    anchor = html.find("a.show-next-element")
  end

  it 'should hide the fieldset'
    fieldset.should_not.be_visible
  end

  it 'should insert an anchor'
    html.should.have_tag("a.show-next-element")
  end

  it 'should insert a valid anchor'
    anchor.should.have_attr("href")
    anchor.attr("href").should.be "#"
  end

  it 'should insert the anchor just before the specified element'
    anchor.next().attr("tagName").toLowerCase().should.be "fieldset"
  end

  it 'should accept a function returning a string'
    anchor.text().should.be "anchor text"
  end

  it 'should accept a function hitting the DOM to return a string'
    html2 = $(fixture("table"))
    table = html2.find("table")

    table.showLink(function() {
      return $(this).attr("title");
    })

    a2 = html2.find("a.show-next-element")
    a2.text().should.be "table header"
  end

  it 'should use a string argument as the anchor text'
    html2 = $(fixture("table"))
    table = html2.find("table")
    
    table.showLink("Show Me")
    
    a2 = html2.find("a.show-next-element")
    a2.text().should.be "Show Me"
  end

  describe 'clicking the link'

    before_each
      anchor.click()
    end

    it 'should show the fieldset'
      fieldset.should.be_visible
    end

    it 'should remove the anchor'
      html.should_not.have_tag("a.show-next-element")
    end

  end
end